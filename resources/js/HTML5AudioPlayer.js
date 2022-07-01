import Debugger from './Debugger';

/**
 * HTML5 JavaScript Audio Player v0.6.
 *
 * Designed to play any supported audio type.
 *
 * @copyright © 2013,2022 Clif Jackson
 * @package HTML5 JavaScript Audio Player
 * @version 0.6
 */
export default class HTML5AudioPlayer {
	#_DEBUGGER				 = null;
	#_VERSION				 = '0.6';
	// Set player root element
	#_PLAYERROOT			 = null;

	// Set up some private defaults
	#_ALL_PLAYLISTS;
	#_AUDIO_CODECS_MIMES     = {
		mp3: ['audio/mpeg', 'audio/MPA', 'audio/mpa-robust','audio/mpeg3','audio/x-mpeg-3'],
		mp4: ['audio/aac', 'audio/aacp', 'audio/3gpp', 'audio/3gpp2', 'audio/mp4', 'audio/MP4A-LATM', 'audio/mpeg4-generic'],
		ogg: ['application/ogg', 'audio/oga', 'audio/ogg', 'audio/vorbis', 'audio/vorbis-config'],
		webm: ['audio/webm'],
		wav: ['audio/vnd.wave', 'audio/wav', 'audio/wave', 'audio/x-wav']
	};
	#_AUDIO_ELEMENT 		 = null;
	#_BROWSER_TEST			 = typeof Audio;
	#_AUTO_PLAY				 = false;
	#_CAN_BUFFER			 = null;
	#_CURRENT_TRACK          = null;
	#_HTML5_SUPPORT			 = false;
	#_PLAYERSETUP            = null;
	#_PLAYER_PARTS_SELECTORS = {
		ajaxSpinner: 'net-stat-box',
		autoplayBtn: 'autoplay-btn',
		currentTimeDisplay: 'current-time',
		infoButton: 'info-button',
		infoScreen: 'info-screen',
		infoScroll: 'info-scroll-box',
		infoScrollContent: 'info-content-box',
		loadProgress: 'loading-bar',
		muteButton: 'mute-button',
		nextTrackBtn: 'next-track-btn',
		playBtn: 'play-btn',
		playlistBox: 'playlist-scroll-box',
		playlistBtn: 'playlist-btn',
		prevTrackBtn: 'prev-track-btn',
		remainingTime: 'remaining-time',
		seekHandleBox: 'seek-handle-box',
		screenTitle: 'screen-title',
		userScreen: 'user-screen',
		volumeSliderMute: 'volume-slider-mute-box',
		volumeButton: 'volume-button',
		volumeSlider: 'volume-slider'
	};
	#_PLAYER_OBJECTS     	= {};
	#_PLAYER_CONTROL_NODES	= [];
	#_PLAYEROBJ				= this;
	#_PLAYLIST              = null;
	#_PLAYLISTS_URL         = '';
	#_PREFERREDMIME         = '';
	#_SAVEDVOLUME           = 0;
	#_SEEKING				= false;
	// #_TOUCH_CLICK           = document.documentElement.classList.contains('touch');
	// #_USERDOWNEVENT         = this.#_TOUCH_CLICK ? 'touchstart' : 'mousedown';
	// #_USERUPEVENT           = this.#_TOUCH_CLICK ? 'touchend' : 'mouseup';
	#_TRACK_COUNT			= 0;

	constructor(playerId, D = null) {
		if (D instanceof Debugger) {
			this.#_DEBUGGER = D;
			this.#_DEBUGGER.enableDebug();
		}

		this.#_PLAYERROOT = document.getElementById(playerId);
		this.#_HTML5_SUPPORT = (this.#_BROWSER_TEST == 'function' || this.#_BROWSER_TEST == 'object');
		this.#_PLAYERSETUP = JSON.parse(this.#_PLAYERROOT.getAttribute('data-setup'));
	}

	/**
	 * Private Methods
	 ---------------------------------------------------------------------*/
	#_debug() {
		if (this.#_DEBUGGER) {
			this.#_DEBUGGER.debug(arguments);
		}
	}

	/**
	 * 
	 * @param {type} type
	 * @param {type} node
	 * @returns {Void}
	 */
	#_attachEvents(node, event, handler) {
		if (typeof node.addEventListener != 'function') {
			throw 'Cannot attach events. Client does not support addEventListener method.';
		}
		node.addEventListener(event, handler, false);
	}

    /**
	 * Determine the supported mime type
	 * 
	 * @param {Array} types List of mime types
	 * @returns {Boolean|String} If not false, returns the audio mime.
	 */
	#_checkMimeSupport(types) {
		var ans = '';
		for (let x in this.#_AUDIO_CODECS_MIMES) {
            for (let xx in this.#_AUDIO_CODECS_MIMES[x]) {
                ans = this.#_AUDIO_ELEMENT.canPlayType(this.#_AUDIO_CODECS_MIMES[x][xx]);

                if (ans == 'probably' || ans == 'maybe') {
this.#_debug('Browser says it can "'  + ans + '" play: ' + this.#_AUDIO_CODECS_MIMES[x][xx]);
                    return x;
                }
            }
		}

		return false;
	}

    /**
	 * Connect to the HTML5 media events
	 *
	 * @return {Void}
	 */
	#_connectAudioEvents() {
		this.#_debug('Connecting audio events...');
		this.#_attachEvents(this.#_AUDIO_ELEMENT, 'canplay', _play);
		this.#_attachEvents(this.#_AUDIO_ELEMENT, 'ended', _handleEndOfAudioEvent);
		this.#_attachEvents(this.#_AUDIO_ELEMENT, 'loadeddata', this.#_PLAYER_OBJECTS.loadProgress.setFullWidth);
		this.#_attachEvents(this.#_AUDIO_ELEMENT, 'pause', _handlePauseEvent);
		this.#_attachEvents(this.#_AUDIO_ELEMENT, 'playing', _handlePlayingEvent);
		this.#_attachEvents(this.#_AUDIO_ELEMENT, 'progress', _handleProgressEvent);
		this.#_attachEvents(this.#_AUDIO_ELEMENT, 'timeupdate', _handleTimeUpdateEvent);
		this.#_debug('Done.');
	}

    /**
	 * Connect player buttons
	 *
	 * @returns {Void}
	 */
	#_connectPlayerButtons() {
		this.#_debug('Connecting player buttons...');
		this.#_attachEvents(this.#_PLAYER_OBJECTS.autoplayBtn.node, 'click', this.#_PLAYER_OBJECTS.autoplayBtn.handleButton);
		this.#_attachEvents(this.#_PLAYER_OBJECTS.infoButton.node, 'click', this.#_PLAYER_OBJECTS.infoScreen.toggle);
		this.#_attachEvents(this.#_PLAYER_OBJECTS.nextTrackBtn.node, 'click', this.#_PLAYER_OBJECTS.nextTrackBtn.handleButton);
		this.#_attachEvents(this.#_PLAYER_OBJECTS.playBtn.node, 'click', this.#_PLAYER_OBJECTS.playBtn.handleButton);
		this.#_attachEvents(this.#_PLAYER_OBJECTS.playlistBtn.node, 'click', this.#_PLAYER_OBJECTS.playlistBtn.handleButton);
		this.#_attachEvents(this.#_PLAYER_OBJECTS.prevTrackBtn.node, 'click', this.#_PLAYER_OBJECTS.prevTrackBtn.handleSingleClick);
		this.#_attachEvents(this.#_PLAYER_OBJECTS.prevTrackBtn.node, 'dblclick', this.#_PLAYER_OBJECTS.prevTrackBtn.handleDblClick);
		this.#_attachEvents(this.#_PLAYER_OBJECTS.seekHandleBox.node, 'input', this.#_PLAYER_OBJECTS.seekHandleBox.handleInput);
		this.#_attachEvents(this.#_PLAYER_OBJECTS.muteButton.node, 'click', this.#_PLAYER_OBJECTS.volumeButton.toggleMute);
        this.#_attachEvents(this.#_PLAYER_OBJECTS.volumeButton.node, 'click', this.#_PLAYER_OBJECTS.volumeSliderMute.toggle);
		this.#_attachEvents(this.#_PLAYER_OBJECTS.volumeSlider.node, 'input', this.#_PLAYER_OBJECTS.volumeSlider.handleInput);
this.#_debug('Done.');
	}

    /**
	 * Convert seconds to mins:secs format
	 *
	 * @param {Number} s Current play time in seconds
	 * @param {Boolean} rev Reverse the time
	 * @returns {String}
	 */
	#_convertSecondsToTime(s, rev) {
		if (rev === true) {
			var mins = Math.floor(s / 60, 10),
			secs = s - mins * 60,
			time = (mins > 9 ? mins : '0' + mins) + ':' + (secs > 9 ? secs : '0' + secs);

			return time;
		}

		var sec_num = parseInt(s, 10),
		hours   = Math.floor(sec_num / 3600),
		minutes = Math.floor((sec_num - (hours * 3600)) / 60),
		seconds = sec_num - (hours * 3600) - (minutes * 60),
		time = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

		return time;
	}

    /**
	 * 
	 * @param {type} str
	 * @returns {Text}
	 */
	#_createTextNode(str) {
		return document.createTextNode(str);
	}

    /**
	 * 
	 * @param {type} node
	 * @returns {Void}
	 */
	#_empty(node) {
		while (node.firstChild) {
			node.removeChild(node.firstChild);
		}

		return node;
	}

    /**
	 * The next track or the first track
	 *
	 * @return {Number} New track number
	 */
	#_getNextTrack() {
		var hypoNext = this.#_CURRENT_TRACK + 1;

		if (hypoNext < this.#_TRACK_COUNT) {
            return hypoNext;
        }

		return 0;
	}

    /**
	 * 
	 * @param {String} className
	 * @returns {object} DOMNode|null
	 */
	#_getNodeByClass(className) {
		var node = this.#_PLAYERROOT.getElementsByClassName(className);

		if (node.length > 0) {
			return node[0];
		}

		return null;
	}

    /**
	 * The previous track or the last track
	 *
	 * @return {Number} New track number
	 */
	#_getPrevTrack() {
		if (this.#_CURRENT_TRACK > 0) {
            return (this.#_CURRENT_TRACK - 1);
        }

		return (this.#_TRACK_COUNT - 1);
	}

    /**
	 * Handler for loading all playlists
	 *
	 * @param {Object} json response from server
	 * @returns {Void}
	 */
	#_handleAllPlaylists(json) {
		if (json == null || typeof json.playlists == 'undefined' || json.playlists.length <= 0) {
			throw 'No playlists found!';
		}
        this.#_PLAYER_OBJECTS.playlistBtn.node.classList.add('active');
		this.#_updateScreenTitle('Playlists');
		this.#_ALL_PLAYLISTS = json.playlists;
		this.#_empty(this.#_PLAYER_OBJECTS.playlistBox);

		for (let x in json.playlists) {
			var button = document.createElement('button'),
			li = document.createElement('li');

			button.appendChild(_createTextNode(json.playlists[x].name));
			button.setAttribute('data-playlist', json.playlists[x].url);
			li.appendChild(button);
			this.#_PLAYER_OBJECTS.playlistBox.appendChild(li);
			this.#_attachEvents(button, 'click', function(e) {
				this.#_PLAYEROBJ.loadPlaylist(this.getAttribute('data-playlist'));
			});
		}
this.#_debug(json.playlists);
this.#_debug('Done.');
	}

    /**
	 * Event handler for end.
     *
	 * @param {Object} e Event object
	 * @returns {Void}
	 */
	#_handleEndOfAudioEvent(e) {
		if (this.#_AUTO_PLAY) {
			this.#_removePlayingClassFromAll();
			this.#_loadTrack(_getNextTrack());
		}
	}

    /**
	 * Event handler for pause.
     *
	 * @param {Object} e Event object
	 * @returns {Void}
	 */
	#_handlePauseEvent(e) {
		this.#_PLAYERROOT.classList.remove('playing');
		this.#_PLAYERROOT.classList.add('paused');
	}

    /**
	 * Event handler for AJAX response.
	 *
	 * @param {Object} e Event object
	 * @returns {Void}
	 */
	#_handlePlayingEvent(e) {
		var parent = this.#_PLAYER_OBJECTS.playlistBox.querySelector('button[data-tracknum="' + this.#_CURRENT_TRACK + '"]').parentNode;

		this.#_PLAYERROOT.classList.remove('paused');
		this.#_PLAYERROOT.classList.add('playing');
		parent.setAttribute('class', 'current');
	}

    /**
	 * AJAX event handler for loading 1 playlist.
	 *
	 * @param {Object} json Response from server.
	 * @returns {Void}
	 */
	#_handlePlaylist(json) {
		if (json == null || typeof json.playlist == 'undefined') {
			throw 'Playlist is empty!';
		}
		this.#_PLAYLIST = json.playlist;
		this.#_updateScreenTitle(this.#_PLAYLIST.name);
		this.#_TRACK_COUNT = this.#_PLAYLIST.tracks.length;
		this.#_setUpPlaylistDisplay();
		this.#_togglePlayerButtons(false);
		this.#_populateTimeDisplay('00:00', '00:00');
	}

    /**
	 * Event handler for audio loading progress.
	 *
	 * @param {Object} e Event object
	 * @returns {Void}
	 */
	#_handleProgressEvent(e) {
		if (this.#_CAN_BUFFER) {
			for (let i = 0; i < this.buffered.length; i++) {
				const percentage = Math.ceil(parseInt((this.buffered.end(i) / this.duration) * 100));
				this.#_PLAYER_OBJECTS.loadProgress.setWidth(percentage + '%');
			}
		}
	}

    /**
	 * Event handler for time update.
	 *
	 * @param {Object} e Event object
	 * @returns {Void}
	 */
	#_handleTimeUpdateEvent(e) {
		// Calculate & set play time display counting backwards
		const dur = this.duration;
		const time = this.currentTime;
		const totalSecondsRemaining = parseInt(dur - time, 10);

		if (!isNaN(totalSecondsRemaining)) {
			this.#_populateTimeDisplay(this.#_convertSecondsToTime(time), this.#_convertSecondsToTime(totalSecondsRemaining, true));

			// Set new seek handle position
			this.#_PLAYER_OBJECTS.seekHandleBox.setPosition(time);
		}
	}

    /**
	 * Load the current track and any info
	 *
	 * @param {Number} ct The current track number using a 0-based index.
	 * @return {Void}
	 */
	#_loadTrack(ct) {
		this.#_pause();
		this.#_PLAYER_OBJECTS.seekHandleBox.toggleEnable(true);
		this.#_PLAYER_OBJECTS.loadProgress.reset();
		this.#_CURRENT_TRACK = ct;
this.#_debug('Loading track: ' + this.#_PLAYLIST.tracks[this.#_CURRENT_TRACK].path);
		this.#_AUDIO_ELEMENT.src = this.#_PLAYLIST.tracks[this.#_CURRENT_TRACK].path;

		// Enable track info button if track has info
		if (this.#_PLAYLIST.tracks[this.#_CURRENT_TRACK].info.length <= 0) {
this.#_debug('Track has NO info.');
			this.#_PLAYER_OBJECTS.infoButton.toggle(false);
		}
		else
		{
this.#_debug('Populating track info...');
			this.#_empty(this.#_PLAYER_OBJECTS.infoScrollContent);
			this.#_PLAYER_OBJECTS.infoScrollContent.innerHTML = '<p>' + this.#_PLAYLIST.tracks[this.#_CURRENT_TRACK].title + '</p>' + this.#_PLAYLIST.tracks[this.#_CURRENT_TRACK].info;
			this.#_PLAYER_OBJECTS.infoButton.toggle(true);
		}

		this.#_AUDIO_ELEMENT.load();
	}

	/**
	 * Pause handler
	 *
	 * @param {Object} e Event object
	 * @returns {Void}
	 */
	#_pause(e) {
this.#_debug('Pausing.');
		this.#_AUDIO_ELEMENT.pause();
	}

    /**
	 * Play handler
	 *
	 * @param {Object} e Event object
	 * @returns {Void}
	 */
	#_play(e) {
this.#_debug('Playing.');
		this.#_PLAYER_OBJECTS.seekHandleBox.toggleEnable(false);
		this.#_PLAYER_OBJECTS.seekHandleBox.setMax();
		this.#_AUDIO_ELEMENT.play();
	}

    /**
	 * Set the time displays
	 *
	 * @param {Number} current
	 * @param {Number} remain
	 * @returns {Void}
	 */
	#_populateTimeDisplay(current, remain) {
		this.#_empty(this.#_PLAYER_OBJECTS.remainingTime).appendChild(_createTextNode(remain));
		this.#_empty(this.#_PLAYER_OBJECTS.currentTimeDisplay).appendChild(_createTextNode(current));
	}

    /**
	 * Set all track in display list to NOT active by removing the class
	 *
	 * @return {Void}
	 */
	#_removePlayingClassFromAll() {
this.#_debug('Removing classes...');
		this.#_PLAYERROOT.classList.remove('playing');
		var current = this.#_PLAYER_OBJECTS.playlistBox.getElementsByClassName('current')[0];

		if (current) {
			current.removeAttribute('class');
		}
	}

    /**
	 * Initialize the playlist display and connect to button click event
	 *
	 * @return {Void}
	 */
	#_setUpPlaylistDisplay() {
		// Clear list contents
		this.#_empty(this.#_PLAYER_OBJECTS.playlistBox);

		for (var x=0; x < this.#_PLAYLIST.tracks.length; x++) {
			var li = document.createElement("li"),
			/**
			 * Create shortened title
			 *
			 * @return {String} Shortened title
			 */
			shortText = (function() {
				var cutoff = 50;
				if (this.#_PLAYLIST.tracks[x].title.length <= cutoff) {
					return this.#_PLAYLIST.tracks[x].title;
				}
				else
				{
					var cut = this.#_PLAYLIST.tracks[x].title.substr(0, cutoff),
					split = cut.split(' '),
					pop = split.pop();

					return split.join(' ') + '...';
				}
			})(),
			// Create a new button node & dress it up.
			btn = document.createElement('button');
			btn.appendChild(_createTextNode(shortText));
			btn.setAttribute('data-tracknum', x);
			// Add to list item
			li.appendChild(btn);
			// Add to list
			this.#_PLAYER_OBJECTS.playlistBox.appendChild(li);
			// Add event handler
			this.#_attachEvents(btn, 'click', function(e) {
				this.#_removePlayingClassFromAll();
				this.#_loadTrack(parseInt(this.getAttribute('data-tracknum')));
			});
		}
	}

    /**
	 * Enable/disable one or all player buttons
	 *
	 * @param {Boolean} state
	 * @returns {Void}
	 */
	#_togglePlayerButtons(state) {
		for (var x = 0; x < this.#_PLAYER_CONTROL_NODES.length; x++) {
			this.#_PLAYER_CONTROL_NODES[x].disabled = state;
		}
	}

    /**
	 * Set the title text
	 *
	 * @param {String} str New title
	 * @returns {Void}
	 */
	#_updateScreenTitle(str) {
		this.#_PLAYER_OBJECTS.screenTitle.innerHTML = str;
	}

	/**
	 * Public Methods
	 ---------------------------------------------------------------------*/
	/**
	 * Initialize the player
	 *
	 * @return {Boolean} false on error
	 */
	init() {
this.#_debug('Initialize HTML5 Audio Player...');
		try {
			if (!this.#_HTML5_SUPPORT) {
				throw 'HTML5 Audio is not supported on your device :(';
			}

			this.#_AUDIO_ELEMENT	= new Audio();
			this.#_CAN_BUFFER       = !this.#_AUDIO_ELEMENT.buffered ? false : true;
			this.#_PLAYLISTS_URL    = this.#_PLAYERSETUP.playlists;
            this.#_PREFERREDMIME    = this.#_checkMimeSupport();

			this.#_PLAYERROOT.classList.add('paused');

            if (!this.#_PREFERREDMIME) {
                throw 'There is no audio codec supported for this device.';
            }

			// Select DOM nodes and populate.
			this.#_PLAYER_OBJECTS = {
				ajaxSpinner: {
					node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.ajaxSpinner),
					toggle: function(state) {
						if (state) {
							this.node.classList.add('play');
						}
						else {
							this.node.classList.remove('play');
						}
					}
				},
				autoplayBtn: {
					node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.autoplayBtn),
					/**
					 * 
					 * @param {Object} e Event object
					 * @returns {Void}
					 */
					handleButton: function(e) {
						if (!this.#_AUTO_PLAY) {
							this.#_AUTO_PLAY = true;
							this.#_PLAYERROOT.classList.add('autoplay');
						}
						else {
							this.#_AUTO_PLAY = false;
							this.#_PLAYERROOT.classList.remove('autoplay');
						}
					}
				},
				currentTimeDisplay: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.currentTimeDisplay),
				infoButton: {
					node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.infoButton),
					toggle: function(state) {
						if (state) {
							this.node.classList.add('has-info');
							this.node.disabled = false;
						}
						else
						{
							this.node.classList.remove('has-info');
							this.node.disabled = true;
						}
					}
				},
				infoScreen:
				{
					node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.infoScreen),
					close: function(fast) {
						var myThis = this;
						if (fast) {
							this.node.classList.add('fast');
							setTimeout(function() {
								myThis.node.classList.remove('fast');
							},500);
						}
						this.node.classList.remove('play');
					},
					open: function() {
						this.node.classList.add('play');
					},
					/* Info screen event handler. Scope is within infoButton */
					toggle: function(e) {
						if (this.#_PLAYER_OBJECTS.infoScreen.node.classList.contains('play')) {
							this.#_PLAYER_OBJECTS.infoScreen.close();
                            this.classList.remove('active');
						}
						else
						{
							this.#_PLAYER_OBJECTS.infoScreen.open();
                            this.classList.add('active');
						}
					}
				},
				infoScroll: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.infoScroll),
				infoScrollContent: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.infoScrollContent),
				loadProgress: {
					node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.loadProgress),
					reset: function() {
						this.setWidth('0');
					},
                    /**
                     * Event handler for audio loadeddata event.
                     *
                     * @param {Object} e
                     * @returns {Void}
                     */
                    setFullWidth: function(e) {
                        if (!this.#_CAN_BUFFER) {
                            this.setWidth('100%');
                        }
                    },
					setWidth: function(w) {
						this.node.style.width = w;
					}
				},
                muteButton: {
                    node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.muteButton)
                },
				nextTrackBtn: {
					node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.nextTrackBtn),
					/**
					 * 
					 * @param {Object} e Event object
					 * @returns {Void}
					 */
					handleButton: function(e) {
						this.#_removePlayingClassFromAll();
						this.#_loadTrack(_getNextTrack());
					}
				},
				playBtn: {
					node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.playBtn),
					/**
					 * Event handler for play/pause button.
					 *
					 * @param {Object} e Event object
					 * @returns {Void}
					 */
					handleButton: function(e) {
						// For the very first play after page load
						if (this.#_AUDIO_ELEMENT.paused && this.#_CURRENT_TRACK == null) {
							this.#_CURRENT_TRACK = 0;
							_loadTrack(this.#_CURRENT_TRACK);
						}
						else if (this.#_AUDIO_ELEMENT.paused) {
							_play(e);                    
						}
						else
						{
							_pause(e);
						}
					}
				},
				playlistBox: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.playlistBox),
				playlistBtn: {
					node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.playlistBtn),
					/**
					 * Event handler for playlist button. Context is itself.
					 *
					 * @param {Object} e Event object
					 * @returns {Void}
					 */
					handleButton: function(e) {
					   if (!this.#_AUDIO_ELEMENT.paused) {
						   _pause();
					   }

					   // Reset doesn't work unless we wait.
					   setTimeout(function() {
                           this.#_PLAYER_OBJECTS.volumeSliderMute.close();
						   this.#_PLAYER_OBJECTS.userScreen.reset();
						   this.#_PLAYEROBJ.loadAllPlaylists();
					   },
					   100);
					}
				},
				prevTrackBtn: {
					node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.prevTrackBtn),
					/**
					 * Event handler for single click on previous button.
					 *
					 * @param {Object} e Event object
					 * @returns {Void}
					 */
					handleSingleClick: function(e) {
						this.#_AUDIO_ELEMENT.currentTime = 0;
					},
					/**
					 * Event handler for double click on previous button.
					 *
					 * @param {Object} e Event object
					 * @returns {Void}
					 */
					handleDblClick: function(e) {
						this.#_removePlayingClassFromAll();
						this.#_loadTrack(_getPrevTrack());
					}
				},
				remainingTime: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.remainingTime),
				seekHandleBox: {
					node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.seekHandleBox),
                    /**
                     * Event handler. Context is itself.
                     *
                     * @param {type} e
                     * @returns {undefined}
                     */
					handleInput: function(e) {
						this.#_AUDIO_ELEMENT.currentTime = this.value;
					},
					reset: function() {
						this.node.value = 0;
						this.toggleEnable(true);
					},
					setMax: function() {
						this.node.setAttribute('max', this.#_AUDIO_ELEMENT.seekable.end(0));
					},
					setPosition: function(val) {
						this.node.value = val;
					},
					toggleEnable: function(status) {
						this.node.disabled = status;
					}
				},
				screenTitle: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.screenTitle),
				userScreen: {
					node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.userScreen),
					reset: function() {
						this.#_PLAYER_OBJECTS.seekHandleBox.reset();
						this.#_PLAYER_OBJECTS.infoScreen.close(true);
						this.#_PLAYER_OBJECTS.loadProgress.reset();
						this.#_populateTimeDisplay('00:00', '00:00');
					}
				},
				volumeButton: {
					node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.volumeButton),
                    toggleActive: function(toggle) {
                        toggle = typeof toggle == 'undefined' ? null : toggle;

                        if (this.node.classList.contains('active') || toggle === false) {
                            this.node.classList.remove('active');
                        }
                        else
                        {
                            this.node.classList.add('active');
                        }
                    },
					toggleMute: function(e) {
                        // Unmute
						if (this.#_AUDIO_ELEMENT.muted) {
							this.#_AUDIO_ELEMENT.muted = false;
                            this.#_PLAYER_OBJECTS.volumeSlider.setPosition(this.#_SAVEDVOLUME);
							this.#_PLAYERROOT.classList.remove('muted');
						}
						else
						{
                            this.#_SAVEDVOLUME = this.#_AUDIO_ELEMENT.volume;
							this.#_AUDIO_ELEMENT.muted = true;
							this.#_PLAYER_OBJECTS.volumeSlider.setPosition(0);
							this.#_PLAYERROOT.classList.add('muted');
						}
					}
				},
                volumeSliderMute: {
                    node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.volumeSliderMute),
					close: function() {
                        this.#_PLAYER_OBJECTS.volumeButton.toggleActive(false);
						this.node.classList.remove('play');
					},
					open: function() {
                        this.#_PLAYER_OBJECTS.volumeButton.toggleActive();
						this.node.classList.add('play');
					},
                    /**
                     * Event handler for slider. Context is volume button.
                     *
                     * @param {type} e
                     * @returns {undefined}
                     */
					toggle: function(e) {
						if (this.#_PLAYER_OBJECTS.volumeSliderMute.node.classList.contains('play')) {
							this.#_PLAYER_OBJECTS.volumeSliderMute.close();
						}
						else {
							this.#_PLAYER_OBJECTS.volumeSliderMute.open();
						}
					}
                },
				volumeSlider: {
					node: this.#_getNodeByClass(this.#_PLAYER_PARTS_SELECTORS.volumeSlider),
					/**
                     * Event handler for slider. Context is itself.
                     *
                     * @param {type} e
                     * @returns {undefined}
                     */
					handleInput: function(e) {
						this.#_AUDIO_ELEMENT.volume = this.value;
					},
					setPosition: function(v) {
						this.node.value = v > 1 ? 1 : v;
this.#_debug('Setting volume: ' + this.node.value);
					}
				}
			};

			this.#_PLAYER_CONTROL_NODES = [
				this.#_PLAYER_OBJECTS.autoplayBtn.node,
				this.#_PLAYER_OBJECTS.playBtn.node,
				this.#_PLAYER_OBJECTS.nextTrackBtn.node,
				this.#_PLAYER_OBJECTS.prevTrackBtn.node,
				this.#_PLAYER_OBJECTS.volumeButton.node,
				this.#_PLAYER_OBJECTS.volumeSlider.node
			];

            // Initialize volume
			this.#_PLAYER_OBJECTS.volumeSlider.setPosition(typeof this.#_PLAYERSETUP.volume == 'undefined' ? 1 : this.#_PLAYERSETUP.volume);
			// Initialize audio seek position
            this.#_PLAYER_OBJECTS.seekHandleBox.setPosition(0);
			this.#_connectPlayerButtons();
			this.#_connectAudioEvents();
			this.#_PLAYER_OBJECTS.infoButton.toggle(false);
			this.#_PLAYER_OBJECTS.seekHandleBox.toggleEnable(true);

			this.#_PLAYEROBJ.loadAllPlaylists();
this.#_debug('Player initialized!');
		}
		catch(err) {
			this.#_debug(err);
			return false;
		}
	};
	/*
	 * Load a list of playlists from the given source.
	 *
     * @param {string} apl URL for list of all playlists.
	 * @returns {Void}
	 */
	loadAllPlaylists(apl) {
        if (typeof apl == 'string') {
            this.#_PLAYLISTS_URL = apl;
        }

		if (typeof this.#_PLAYLISTS_URL == 'undefined') {
			throw new Error('No URL has been defined for your list of playlists.');
		}
        
		this.#_togglePlayerButtons(true);
		this.#_PLAYER_OBJECTS.ajaxSpinner.toggle(true);
		this.#_PLAYER_OBJECTS.infoButton.toggle(false);
this.#_debug('Load all playlists...');
		var deferred = xhr.get(
		{
            headers: { "X-Requested-With": null },
			handleAs: 'json',
			load: _handleAllPlaylists,
			url: this.#_PLAYLISTS_URL
		});
		deferred.addCallback(function() {
			this.#_PLAYER_OBJECTS.ajaxSpinner.toggle(false);
		});
	};
	/**
	 * Load the playlist with an optional playlist path
	 *
	 * @param {String} pl Path to load playlist from via AJAX
	 * @return {Boolean}
	 */
	loadPlaylist(pl) {
		if (typeof pl != 'string' || pl.length <= 0) {
			throw 'No playlist has been defined!';
		}
this.#_debug('Load playlist...');
this.#_debug(pl);
		this.#_PLAYER_OBJECTS.ajaxSpinner.toggle(true);
		this.#_togglePlayerButtons(true);
		this.#_PLAYER_OBJECTS.playlistBtn.node.classList.remove('active');

		const deferred = xhr.get({
			headers: { "X-Requested-With": null },
			url: pl,
			handleAs: 'json',
			load: _handlePlaylist
		});
		deferred.addCallback(function() {
			this.#_PLAYER_OBJECTS.ajaxSpinner.toggle(false);
		});

		this.#_debug('Done');
	}
}
