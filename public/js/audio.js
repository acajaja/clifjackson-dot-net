/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/Debugger.js":
/*!**********************************!*\
  !*** ./resources/js/Debugger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Debugger)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _DEBUG = /*#__PURE__*/new WeakMap();

var _HASCONSOLE = /*#__PURE__*/new WeakMap();

var _debug = /*#__PURE__*/new WeakSet();

var Debugger = /*#__PURE__*/function () {
  function Debugger() {
    _classCallCheck(this, Debugger);

    _classPrivateMethodInitSpec(this, _debug);

    _classPrivateFieldInitSpec(this, _DEBUG, {
      writable: true,
      value: false
    });

    _classPrivateFieldInitSpec(this, _HASCONSOLE, {
      writable: true,
      value: typeof console != 'undefined' ? true : false
    });
  }

  _createClass(Debugger, [{
    key: "debug",
    value: function debug() {
      if (_classPrivateFieldGet(this, _DEBUG) === true) {
        _classPrivateMethodGet(this, _debug, _debug2).call(this, arguments);
      }
    }
  }, {
    key: "disableDebug",
    value: function disableDebug() {
      this.setDebug(false);
    }
  }, {
    key: "enableDebug",
    value: function enableDebug() {
      this.setDebug(true);
    }
  }, {
    key: "setDebug",
    value: function setDebug(onOff) {
      _classPrivateFieldSet(this, _DEBUG, onOff);
    }
  }]);

  return Debugger;
}();

function _debug2() {
  for (var x in arguments) {
    if (_classPrivateFieldGet(this, _HASCONSOLE)) {
      console.info(arguments[x]);
    } else {
      alert(arguments[x]);
    }
  }
}



/***/ }),

/***/ "./resources/js/HTML5AudioPlayer.js":
/*!******************************************!*\
  !*** ./resources/js/HTML5AudioPlayer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTML5AudioPlayer)
/* harmony export */ });
/* harmony import */ var _Debugger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Debugger */ "./resources/js/Debugger.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }


/**
 * HTML5 JavaScript Audio Player v0.6.
 *
 * Designed to play any supported audio type.
 *
 * @copyright © 2013,2022 Clif Jackson
 * @package HTML5 JavaScript Audio Player
 * @version 0.6
 */

var _DEBUGGER = /*#__PURE__*/new WeakMap();

var _VERSION = /*#__PURE__*/new WeakMap();

var _PLAYERROOT = /*#__PURE__*/new WeakMap();

var _ALL_PLAYLISTS = /*#__PURE__*/new WeakMap();

var _AUDIO_CODECS_MIMES = /*#__PURE__*/new WeakMap();

var _AUDIO_ELEMENT = /*#__PURE__*/new WeakMap();

var _BROWSER_TEST = /*#__PURE__*/new WeakMap();

var _AUTO_PLAY = /*#__PURE__*/new WeakMap();

var _CAN_BUFFER = /*#__PURE__*/new WeakMap();

var _CURRENT_TRACK = /*#__PURE__*/new WeakMap();

var _HTML5_SUPPORT = /*#__PURE__*/new WeakMap();

var _PLAYERSETUP = /*#__PURE__*/new WeakMap();

var _PLAYER_PARTS_SELECTORS = /*#__PURE__*/new WeakMap();

var _PLAYER_OBJECTS = /*#__PURE__*/new WeakMap();

var _PLAYER_CONTROL_NODES = /*#__PURE__*/new WeakMap();

var _PLAYEROBJ = /*#__PURE__*/new WeakMap();

var _PLAYLIST = /*#__PURE__*/new WeakMap();

var _PLAYLISTS_URL = /*#__PURE__*/new WeakMap();

var _PREFERREDMIME = /*#__PURE__*/new WeakMap();

var _SAVEDVOLUME = /*#__PURE__*/new WeakMap();

var _SEEKING = /*#__PURE__*/new WeakMap();

var _TRACK_COUNT = /*#__PURE__*/new WeakMap();

var _debug = /*#__PURE__*/new WeakSet();

var _attachEvents = /*#__PURE__*/new WeakSet();

var _checkMimeSupport = /*#__PURE__*/new WeakSet();

var _connectAudioEvents = /*#__PURE__*/new WeakSet();

var _connectPlayerButtons = /*#__PURE__*/new WeakSet();

var _convertSecondsToTime = /*#__PURE__*/new WeakSet();

var _createTextNode2 = /*#__PURE__*/new WeakSet();

var _empty = /*#__PURE__*/new WeakSet();

var _getNextTrack2 = /*#__PURE__*/new WeakSet();

var _getNodeByClass = /*#__PURE__*/new WeakSet();

var _getPrevTrack2 = /*#__PURE__*/new WeakSet();

var _handleAllPlaylists2 = /*#__PURE__*/new WeakSet();

var _handleEndOfAudioEvent2 = /*#__PURE__*/new WeakSet();

var _handlePauseEvent2 = /*#__PURE__*/new WeakSet();

var _handlePlayingEvent2 = /*#__PURE__*/new WeakSet();

var _handlePlaylist2 = /*#__PURE__*/new WeakSet();

var _handleProgressEvent2 = /*#__PURE__*/new WeakSet();

var _handleTimeUpdateEvent2 = /*#__PURE__*/new WeakSet();

var _loadTrack2 = /*#__PURE__*/new WeakSet();

var _pause2 = /*#__PURE__*/new WeakSet();

var _play2 = /*#__PURE__*/new WeakSet();

var _populateTimeDisplay = /*#__PURE__*/new WeakSet();

var _removePlayingClassFromAll = /*#__PURE__*/new WeakSet();

var _setUpPlaylistDisplay = /*#__PURE__*/new WeakSet();

var _togglePlayerButtons = /*#__PURE__*/new WeakSet();

var _updateScreenTitle = /*#__PURE__*/new WeakSet();

var HTML5AudioPlayer = /*#__PURE__*/function () {
  // Set player root element
  // Set up some private defaults
  // #_TOUCH_CLICK           = document.documentElement.classList.contains('touch');
  // #_USERDOWNEVENT         = this.#_TOUCH_CLICK ? 'touchstart' : 'mousedown';
  // #_USERUPEVENT           = this.#_TOUCH_CLICK ? 'touchend' : 'mouseup';
  function HTML5AudioPlayer(playerId) {
    var D = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, HTML5AudioPlayer);

    _classPrivateMethodInitSpec(this, _updateScreenTitle);

    _classPrivateMethodInitSpec(this, _togglePlayerButtons);

    _classPrivateMethodInitSpec(this, _setUpPlaylistDisplay);

    _classPrivateMethodInitSpec(this, _removePlayingClassFromAll);

    _classPrivateMethodInitSpec(this, _populateTimeDisplay);

    _classPrivateMethodInitSpec(this, _play2);

    _classPrivateMethodInitSpec(this, _pause2);

    _classPrivateMethodInitSpec(this, _loadTrack2);

    _classPrivateMethodInitSpec(this, _handleTimeUpdateEvent2);

    _classPrivateMethodInitSpec(this, _handleProgressEvent2);

    _classPrivateMethodInitSpec(this, _handlePlaylist2);

    _classPrivateMethodInitSpec(this, _handlePlayingEvent2);

    _classPrivateMethodInitSpec(this, _handlePauseEvent2);

    _classPrivateMethodInitSpec(this, _handleEndOfAudioEvent2);

    _classPrivateMethodInitSpec(this, _handleAllPlaylists2);

    _classPrivateMethodInitSpec(this, _getPrevTrack2);

    _classPrivateMethodInitSpec(this, _getNodeByClass);

    _classPrivateMethodInitSpec(this, _getNextTrack2);

    _classPrivateMethodInitSpec(this, _empty);

    _classPrivateMethodInitSpec(this, _createTextNode2);

    _classPrivateMethodInitSpec(this, _convertSecondsToTime);

    _classPrivateMethodInitSpec(this, _connectPlayerButtons);

    _classPrivateMethodInitSpec(this, _connectAudioEvents);

    _classPrivateMethodInitSpec(this, _checkMimeSupport);

    _classPrivateMethodInitSpec(this, _attachEvents);

    _classPrivateMethodInitSpec(this, _debug);

    _classPrivateFieldInitSpec(this, _DEBUGGER, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _VERSION, {
      writable: true,
      value: '0.6'
    });

    _classPrivateFieldInitSpec(this, _PLAYERROOT, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _ALL_PLAYLISTS, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _AUDIO_CODECS_MIMES, {
      writable: true,
      value: {
        mp3: ['audio/mpeg', 'audio/MPA', 'audio/mpa-robust', 'audio/mpeg3', 'audio/x-mpeg-3'],
        mp4: ['audio/aac', 'audio/aacp', 'audio/3gpp', 'audio/3gpp2', 'audio/mp4', 'audio/MP4A-LATM', 'audio/mpeg4-generic'],
        ogg: ['application/ogg', 'audio/oga', 'audio/ogg', 'audio/vorbis', 'audio/vorbis-config'],
        webm: ['audio/webm'],
        wav: ['audio/vnd.wave', 'audio/wav', 'audio/wave', 'audio/x-wav']
      }
    });

    _classPrivateFieldInitSpec(this, _AUDIO_ELEMENT, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _BROWSER_TEST, {
      writable: true,
      value: typeof Audio === "undefined" ? "undefined" : _typeof(Audio)
    });

    _classPrivateFieldInitSpec(this, _AUTO_PLAY, {
      writable: true,
      value: false
    });

    _classPrivateFieldInitSpec(this, _CAN_BUFFER, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _CURRENT_TRACK, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _HTML5_SUPPORT, {
      writable: true,
      value: false
    });

    _classPrivateFieldInitSpec(this, _PLAYERSETUP, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _PLAYER_PARTS_SELECTORS, {
      writable: true,
      value: {
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
      }
    });

    _classPrivateFieldInitSpec(this, _PLAYER_OBJECTS, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _PLAYER_CONTROL_NODES, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _PLAYEROBJ, {
      writable: true,
      value: this
    });

    _classPrivateFieldInitSpec(this, _PLAYLIST, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _PLAYLISTS_URL, {
      writable: true,
      value: ''
    });

    _classPrivateFieldInitSpec(this, _PREFERREDMIME, {
      writable: true,
      value: ''
    });

    _classPrivateFieldInitSpec(this, _SAVEDVOLUME, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _SEEKING, {
      writable: true,
      value: false
    });

    _classPrivateFieldInitSpec(this, _TRACK_COUNT, {
      writable: true,
      value: 0
    });

    if (D instanceof _Debugger__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      _classPrivateFieldSet(this, _DEBUGGER, D);

      _classPrivateFieldGet(this, _DEBUGGER).enableDebug();
    }

    _classPrivateFieldSet(this, _PLAYERROOT, document.getElementById(playerId));

    _classPrivateFieldSet(this, _HTML5_SUPPORT, _classPrivateFieldGet(this, _BROWSER_TEST) == 'function' || _classPrivateFieldGet(this, _BROWSER_TEST) == 'object');

    _classPrivateFieldSet(this, _PLAYERSETUP, JSON.parse(_classPrivateFieldGet(this, _PLAYERROOT).getAttribute('data-setup')));
  }
  /**
   * Private Methods
   ---------------------------------------------------------------------*/


  _createClass(HTML5AudioPlayer, [{
    key: "init",
    value:
    /**
     * Public Methods
     ---------------------------------------------------------------------*/

    /**
     * Initialize the player
     *
     * @return {Boolean} false on error
     */
    function init() {
      _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Initialize HTML5 Audio Player...');

      try {
        if (!_classPrivateFieldGet(this, _HTML5_SUPPORT)) {
          throw 'HTML5 Audio is not supported on your device :(';
        }

        _classPrivateFieldSet(this, _AUDIO_ELEMENT, new Audio());

        _classPrivateFieldSet(this, _CAN_BUFFER, !_classPrivateFieldGet(this, _AUDIO_ELEMENT).buffered ? false : true);

        _classPrivateFieldSet(this, _PLAYLISTS_URL, _classPrivateFieldGet(this, _PLAYERSETUP).playlists);

        _classPrivateFieldSet(this, _PREFERREDMIME, _classPrivateMethodGet(this, _checkMimeSupport, _checkMimeSupport2).call(this));

        _classPrivateFieldGet(this, _PLAYERROOT).classList.add('paused');

        if (!_classPrivateFieldGet(this, _PREFERREDMIME)) {
          throw 'There is no audio codec supported for this device.';
        } // Select DOM nodes and populate.


        _classPrivateFieldSet(this, _PLAYER_OBJECTS, {
          ajaxSpinner: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).ajaxSpinner),
            toggle: function toggle(state) {
              if (state) {
                this.node.classList.add('play');
              } else {
                this.node.classList.remove('play');
              }
            }
          },
          autoplayBtn: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).autoplayBtn),

            /**
             * 
             * @param {Object} e Event object
             * @returns {Void}
             */
            handleButton: function handleButton(e) {
              if (!_classPrivateFieldGet(this, _AUTO_PLAY)) {
                _classPrivateFieldSet(this, _AUTO_PLAY, true);

                _classPrivateFieldGet(this, _PLAYERROOT).classList.add('autoplay');
              } else {
                _classPrivateFieldSet(this, _AUTO_PLAY, false);

                _classPrivateFieldGet(this, _PLAYERROOT).classList.remove('autoplay');
              }
            }
          },
          currentTimeDisplay: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).currentTimeDisplay),
          infoButton: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).infoButton),
            toggle: function toggle(state) {
              if (state) {
                this.node.classList.add('has-info');
                this.node.disabled = false;
              } else {
                this.node.classList.remove('has-info');
                this.node.disabled = true;
              }
            }
          },
          infoScreen: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).infoScreen),
            close: function close(fast) {
              var myThis = this;

              if (fast) {
                this.node.classList.add('fast');
                setTimeout(function () {
                  myThis.node.classList.remove('fast');
                }, 500);
              }

              this.node.classList.remove('play');
            },
            open: function open() {
              this.node.classList.add('play');
            },

            /* Info screen event handler. Scope is within infoButton */
            toggle: function toggle(e) {
              if (_classPrivateFieldGet(this, _PLAYER_OBJECTS).infoScreen.node.classList.contains('play')) {
                _classPrivateFieldGet(this, _PLAYER_OBJECTS).infoScreen.close();

                this.classList.remove('active');
              } else {
                _classPrivateFieldGet(this, _PLAYER_OBJECTS).infoScreen.open();

                this.classList.add('active');
              }
            }
          },
          infoScroll: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).infoScroll),
          infoScrollContent: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).infoScrollContent),
          loadProgress: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).loadProgress),
            reset: function reset() {
              this.setWidth('0');
            },

            /**
             * Event handler for audio loadeddata event.
             *
             * @param {Object} e
             * @returns {Void}
             */
            setFullWidth: function setFullWidth(e) {
              if (!_classPrivateFieldGet(this, _CAN_BUFFER)) {
                this.setWidth('100%');
              }
            },
            setWidth: function setWidth(w) {
              this.node.style.width = w;
            }
          },
          muteButton: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).muteButton)
          },
          nextTrackBtn: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).nextTrackBtn),

            /**
             * 
             * @param {Object} e Event object
             * @returns {Void}
             */
            handleButton: function handleButton(e) {
              _classPrivateMethodGet(this, _removePlayingClassFromAll, _removePlayingClassFromAll2).call(this);

              _classPrivateMethodGet(this, _loadTrack2, _loadTrack3).call(this, _getNextTrack());
            }
          },
          playBtn: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).playBtn),

            /**
             * Event handler for play/pause button.
             *
             * @param {Object} e Event object
             * @returns {Void}
             */
            handleButton: function handleButton(e) {
              // For the very first play after page load
              if (_classPrivateFieldGet(this, _AUDIO_ELEMENT).paused && _classPrivateFieldGet(this, _CURRENT_TRACK) == null) {
                _classPrivateFieldSet(this, _CURRENT_TRACK, 0);

                _loadTrack(_classPrivateFieldGet(this, _CURRENT_TRACK));
              } else if (_classPrivateFieldGet(this, _AUDIO_ELEMENT).paused) {
                _play(e);
              } else {
                _pause(e);
              }
            }
          },
          playlistBox: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).playlistBox),
          playlistBtn: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).playlistBtn),

            /**
             * Event handler for playlist button. Context is itself.
             *
             * @param {Object} e Event object
             * @returns {Void}
             */
            handleButton: function handleButton(e) {
              if (!_classPrivateFieldGet(this, _AUDIO_ELEMENT).paused) {
                _pause();
              } // Reset doesn't work unless we wait.


              setTimeout(function () {
                _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeSliderMute.close();

                _classPrivateFieldGet(this, _PLAYER_OBJECTS).userScreen.reset();

                _classPrivateFieldGet(this, _PLAYEROBJ).loadAllPlaylists();
              }, 100);
            }
          },
          prevTrackBtn: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).prevTrackBtn),

            /**
             * Event handler for single click on previous button.
             *
             * @param {Object} e Event object
             * @returns {Void}
             */
            handleSingleClick: function handleSingleClick(e) {
              _classPrivateFieldGet(this, _AUDIO_ELEMENT).currentTime = 0;
            },

            /**
             * Event handler for double click on previous button.
             *
             * @param {Object} e Event object
             * @returns {Void}
             */
            handleDblClick: function handleDblClick(e) {
              _classPrivateMethodGet(this, _removePlayingClassFromAll, _removePlayingClassFromAll2).call(this);

              _classPrivateMethodGet(this, _loadTrack2, _loadTrack3).call(this, _getPrevTrack());
            }
          },
          remainingTime: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).remainingTime),
          seekHandleBox: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).seekHandleBox),

            /**
             * Event handler. Context is itself.
             *
             * @param {type} e
             * @returns {undefined}
             */
            handleInput: function handleInput(e) {
              _classPrivateFieldGet(this, _AUDIO_ELEMENT).currentTime = this.value;
            },
            reset: function reset() {
              this.node.value = 0;
              this.toggleEnable(true);
            },
            setMax: function setMax() {
              this.node.setAttribute('max', _classPrivateFieldGet(this, _AUDIO_ELEMENT).seekable.end(0));
            },
            setPosition: function setPosition(val) {
              this.node.value = val;
            },
            toggleEnable: function toggleEnable(status) {
              this.node.disabled = status;
            }
          },
          screenTitle: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).screenTitle),
          userScreen: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).userScreen),
            reset: function reset() {
              _classPrivateFieldGet(this, _PLAYER_OBJECTS).seekHandleBox.reset();

              _classPrivateFieldGet(this, _PLAYER_OBJECTS).infoScreen.close(true);

              _classPrivateFieldGet(this, _PLAYER_OBJECTS).loadProgress.reset();

              _classPrivateMethodGet(this, _populateTimeDisplay, _populateTimeDisplay2).call(this, '00:00', '00:00');
            }
          },
          volumeButton: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).volumeButton),
            toggleActive: function toggleActive(toggle) {
              toggle = typeof toggle == 'undefined' ? null : toggle;

              if (this.node.classList.contains('active') || toggle === false) {
                this.node.classList.remove('active');
              } else {
                this.node.classList.add('active');
              }
            },
            toggleMute: function toggleMute(e) {
              // Unmute
              if (_classPrivateFieldGet(this, _AUDIO_ELEMENT).muted) {
                _classPrivateFieldGet(this, _AUDIO_ELEMENT).muted = false;

                _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeSlider.setPosition(_classPrivateFieldGet(this, _SAVEDVOLUME));

                _classPrivateFieldGet(this, _PLAYERROOT).classList.remove('muted');
              } else {
                _classPrivateFieldSet(this, _SAVEDVOLUME, _classPrivateFieldGet(this, _AUDIO_ELEMENT).volume);

                _classPrivateFieldGet(this, _AUDIO_ELEMENT).muted = true;

                _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeSlider.setPosition(0);

                _classPrivateFieldGet(this, _PLAYERROOT).classList.add('muted');
              }
            }
          },
          volumeSliderMute: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).volumeSliderMute),
            close: function close() {
              _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeButton.toggleActive(false);

              this.node.classList.remove('play');
            },
            open: function open() {
              _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeButton.toggleActive();

              this.node.classList.add('play');
            },

            /**
             * Event handler for slider. Context is volume button.
             *
             * @param {type} e
             * @returns {undefined}
             */
            toggle: function toggle(e) {
              if (_classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeSliderMute.node.classList.contains('play')) {
                _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeSliderMute.close();
              } else {
                _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeSliderMute.open();
              }
            }
          },
          volumeSlider: {
            node: _classPrivateMethodGet(this, _getNodeByClass, _getNodeByClass2).call(this, _classPrivateFieldGet(this, _PLAYER_PARTS_SELECTORS).volumeSlider),

            /**
                            * Event handler for slider. Context is itself.
                            *
                            * @param {type} e
                            * @returns {undefined}
                            */
            handleInput: function handleInput(e) {
              _classPrivateFieldGet(this, _AUDIO_ELEMENT).volume = this.value;
            },
            setPosition: function setPosition(v) {
              this.node.value = v > 1 ? 1 : v;

              _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Setting volume: ' + this.node.value);
            }
          }
        });

        _classPrivateFieldSet(this, _PLAYER_CONTROL_NODES, [_classPrivateFieldGet(this, _PLAYER_OBJECTS).autoplayBtn.node, _classPrivateFieldGet(this, _PLAYER_OBJECTS).playBtn.node, _classPrivateFieldGet(this, _PLAYER_OBJECTS).nextTrackBtn.node, _classPrivateFieldGet(this, _PLAYER_OBJECTS).prevTrackBtn.node, _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeButton.node, _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeSlider.node]); // Initialize volume


        _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeSlider.setPosition(typeof _classPrivateFieldGet(this, _PLAYERSETUP).volume == 'undefined' ? 1 : _classPrivateFieldGet(this, _PLAYERSETUP).volume); // Initialize audio seek position


        _classPrivateFieldGet(this, _PLAYER_OBJECTS).seekHandleBox.setPosition(0);

        _classPrivateMethodGet(this, _connectPlayerButtons, _connectPlayerButtons2).call(this);

        _classPrivateMethodGet(this, _connectAudioEvents, _connectAudioEvents2).call(this);

        _classPrivateFieldGet(this, _PLAYER_OBJECTS).infoButton.toggle(false);

        _classPrivateFieldGet(this, _PLAYER_OBJECTS).seekHandleBox.toggleEnable(true);

        _classPrivateFieldGet(this, _PLAYEROBJ).loadAllPlaylists();

        _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Player initialized!');
      } catch (err) {
        _classPrivateMethodGet(this, _debug, _debug2).call(this, err);

        return false;
      }
    }
  }, {
    key: "loadAllPlaylists",
    value:
    /*
     * Load a list of playlists from the given source.
     *
        * @param {string} apl URL for list of all playlists.
     * @returns {Void}
     */
    function loadAllPlaylists(apl) {
      if (typeof apl == 'string') {
        _classPrivateFieldSet(this, _PLAYLISTS_URL, apl);
      }

      if (typeof _classPrivateFieldGet(this, _PLAYLISTS_URL) == 'undefined') {
        throw new Error('No URL has been defined for your list of playlists.');
      }

      _classPrivateMethodGet(this, _togglePlayerButtons, _togglePlayerButtons2).call(this, true);

      _classPrivateFieldGet(this, _PLAYER_OBJECTS).ajaxSpinner.toggle(true);

      _classPrivateFieldGet(this, _PLAYER_OBJECTS).infoButton.toggle(false);

      _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Load all playlists...');

      var deferred = xhr.get({
        headers: {
          "X-Requested-With": null
        },
        handleAs: 'json',
        load: _handleAllPlaylists,
        url: _classPrivateFieldGet(this, _PLAYLISTS_URL)
      });
      deferred.addCallback(function () {
        _classPrivateFieldGet(this, _PLAYER_OBJECTS).ajaxSpinner.toggle(false);
      });
    }
  }, {
    key: "loadPlaylist",
    value:
    /**
     * Load the playlist with an optional playlist path
     *
     * @param {String} pl Path to load playlist from via AJAX
     * @return {Boolean}
     */
    function loadPlaylist(pl) {
      if (typeof pl != 'string' || pl.length <= 0) {
        throw 'No playlist has been defined!';
      }

      _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Load playlist...');

      _classPrivateMethodGet(this, _debug, _debug2).call(this, pl);

      _classPrivateFieldGet(this, _PLAYER_OBJECTS).ajaxSpinner.toggle(true);

      _classPrivateMethodGet(this, _togglePlayerButtons, _togglePlayerButtons2).call(this, true);

      _classPrivateFieldGet(this, _PLAYER_OBJECTS).playlistBtn.node.classList.remove('active');

      var deferred = xhr.get({
        headers: {
          "X-Requested-With": null
        },
        url: pl,
        handleAs: 'json',
        load: _handlePlaylist
      });
      deferred.addCallback(function () {
        _classPrivateFieldGet(this, _PLAYER_OBJECTS).ajaxSpinner.toggle(false);
      });

      _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Done');
    }
  }]);

  return HTML5AudioPlayer;
}();

function _debug2() {
  if (_classPrivateFieldGet(this, _DEBUGGER)) {
    _classPrivateFieldGet(this, _DEBUGGER).debug(arguments);
  }
}

function _attachEvents2(node, event, handler) {
  if (typeof node.addEventListener != 'function') {
    throw 'Cannot attach events. Client does not support addEventListener method.';
  }

  node.addEventListener(event, handler, false);
}

function _checkMimeSupport2(types) {
  var ans = '';

  for (var x in _classPrivateFieldGet(this, _AUDIO_CODECS_MIMES)) {
    for (var xx in _classPrivateFieldGet(this, _AUDIO_CODECS_MIMES)[x]) {
      ans = _classPrivateFieldGet(this, _AUDIO_ELEMENT).canPlayType(_classPrivateFieldGet(this, _AUDIO_CODECS_MIMES)[x][xx]);

      if (ans == 'probably' || ans == 'maybe') {
        _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Browser says it can "' + ans + '" play: ' + _classPrivateFieldGet(this, _AUDIO_CODECS_MIMES)[x][xx]);

        return x;
      }
    }
  }

  return false;
}

function _connectAudioEvents2() {
  _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Connecting audio events...');

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _AUDIO_ELEMENT), 'canplay', _play);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _AUDIO_ELEMENT), 'ended', _handleEndOfAudioEvent);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _AUDIO_ELEMENT), 'loadeddata', _classPrivateFieldGet(this, _PLAYER_OBJECTS).loadProgress.setFullWidth);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _AUDIO_ELEMENT), 'pause', _handlePauseEvent);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _AUDIO_ELEMENT), 'playing', _handlePlayingEvent);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _AUDIO_ELEMENT), 'progress', _handleProgressEvent);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _AUDIO_ELEMENT), 'timeupdate', _handleTimeUpdateEvent);

  _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Done.');
}

function _connectPlayerButtons2() {
  _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Connecting player buttons...');

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).autoplayBtn.node, 'click', _classPrivateFieldGet(this, _PLAYER_OBJECTS).autoplayBtn.handleButton);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).infoButton.node, 'click', _classPrivateFieldGet(this, _PLAYER_OBJECTS).infoScreen.toggle);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).nextTrackBtn.node, 'click', _classPrivateFieldGet(this, _PLAYER_OBJECTS).nextTrackBtn.handleButton);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).playBtn.node, 'click', _classPrivateFieldGet(this, _PLAYER_OBJECTS).playBtn.handleButton);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).playlistBtn.node, 'click', _classPrivateFieldGet(this, _PLAYER_OBJECTS).playlistBtn.handleButton);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).prevTrackBtn.node, 'click', _classPrivateFieldGet(this, _PLAYER_OBJECTS).prevTrackBtn.handleSingleClick);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).prevTrackBtn.node, 'dblclick', _classPrivateFieldGet(this, _PLAYER_OBJECTS).prevTrackBtn.handleDblClick);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).seekHandleBox.node, 'input', _classPrivateFieldGet(this, _PLAYER_OBJECTS).seekHandleBox.handleInput);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).muteButton.node, 'click', _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeButton.toggleMute);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeButton.node, 'click', _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeSliderMute.toggle);

  _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeSlider.node, 'input', _classPrivateFieldGet(this, _PLAYER_OBJECTS).volumeSlider.handleInput);

  _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Done.');
}

function _convertSecondsToTime2(s, rev) {
  if (rev === true) {
    var mins = Math.floor(s / 60, 10),
        secs = s - mins * 60,
        time = (mins > 9 ? mins : '0' + mins) + ':' + (secs > 9 ? secs : '0' + secs);
    return time;
  }

  var sec_num = parseInt(s, 10),
      hours = Math.floor(sec_num / 3600),
      minutes = Math.floor((sec_num - hours * 3600) / 60),
      seconds = sec_num - hours * 3600 - minutes * 60,
      time = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
  return time;
}

function _createTextNode3(str) {
  return document.createTextNode(str);
}

function _empty2(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }

  return node;
}

function _getNextTrack3() {
  var hypoNext = _classPrivateFieldGet(this, _CURRENT_TRACK) + 1;

  if (hypoNext < _classPrivateFieldGet(this, _TRACK_COUNT)) {
    return hypoNext;
  }

  return 0;
}

function _getNodeByClass2(className) {
  var node = _classPrivateFieldGet(this, _PLAYERROOT).getElementsByClassName(className);

  if (node.length > 0) {
    return node[0];
  }

  return null;
}

function _getPrevTrack3() {
  if (_classPrivateFieldGet(this, _CURRENT_TRACK) > 0) {
    return _classPrivateFieldGet(this, _CURRENT_TRACK) - 1;
  }

  return _classPrivateFieldGet(this, _TRACK_COUNT) - 1;
}

function _handleAllPlaylists3(json) {
  if (json == null || typeof json.playlists == 'undefined' || json.playlists.length <= 0) {
    throw 'No playlists found!';
  }

  _classPrivateFieldGet(this, _PLAYER_OBJECTS).playlistBtn.node.classList.add('active');

  _classPrivateMethodGet(this, _updateScreenTitle, _updateScreenTitle2).call(this, 'Playlists');

  _classPrivateFieldSet(this, _ALL_PLAYLISTS, json.playlists);

  _classPrivateMethodGet(this, _empty, _empty2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).playlistBox);

  for (var x in json.playlists) {
    var button = document.createElement('button'),
        li = document.createElement('li');
    button.appendChild(_createTextNode(json.playlists[x].name));
    button.setAttribute('data-playlist', json.playlists[x].url);
    li.appendChild(button);

    _classPrivateFieldGet(this, _PLAYER_OBJECTS).playlistBox.appendChild(li);

    _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, button, 'click', function (e) {
      _classPrivateFieldGet(this, _PLAYEROBJ).loadPlaylist(this.getAttribute('data-playlist'));
    });
  }

  _classPrivateMethodGet(this, _debug, _debug2).call(this, json.playlists);

  _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Done.');
}

function _handleEndOfAudioEvent3(e) {
  if (_classPrivateFieldGet(this, _AUTO_PLAY)) {
    _classPrivateMethodGet(this, _removePlayingClassFromAll, _removePlayingClassFromAll2).call(this);

    _classPrivateMethodGet(this, _loadTrack2, _loadTrack3).call(this, _getNextTrack());
  }
}

function _handlePauseEvent3(e) {
  _classPrivateFieldGet(this, _PLAYERROOT).classList.remove('playing');

  _classPrivateFieldGet(this, _PLAYERROOT).classList.add('paused');
}

function _handlePlayingEvent3(e) {
  var parent = _classPrivateFieldGet(this, _PLAYER_OBJECTS).playlistBox.querySelector('button[data-tracknum="' + _classPrivateFieldGet(this, _CURRENT_TRACK) + '"]').parentNode;

  _classPrivateFieldGet(this, _PLAYERROOT).classList.remove('paused');

  _classPrivateFieldGet(this, _PLAYERROOT).classList.add('playing');

  parent.setAttribute('class', 'current');
}

function _handlePlaylist3(json) {
  if (json == null || typeof json.playlist == 'undefined') {
    throw 'Playlist is empty!';
  }

  _classPrivateFieldSet(this, _PLAYLIST, json.playlist);

  _classPrivateMethodGet(this, _updateScreenTitle, _updateScreenTitle2).call(this, _classPrivateFieldGet(this, _PLAYLIST).name);

  _classPrivateFieldSet(this, _TRACK_COUNT, _classPrivateFieldGet(this, _PLAYLIST).tracks.length);

  _classPrivateMethodGet(this, _setUpPlaylistDisplay, _setUpPlaylistDisplay2).call(this);

  _classPrivateMethodGet(this, _togglePlayerButtons, _togglePlayerButtons2).call(this, false);

  _classPrivateMethodGet(this, _populateTimeDisplay, _populateTimeDisplay2).call(this, '00:00', '00:00');
}

function _handleProgressEvent3(e) {
  if (_classPrivateFieldGet(this, _CAN_BUFFER)) {
    for (var i = 0; i < this.buffered.length; i++) {
      var percentage = Math.ceil(parseInt(this.buffered.end(i) / this.duration * 100));

      _classPrivateFieldGet(this, _PLAYER_OBJECTS).loadProgress.setWidth(percentage + '%');
    }
  }
}

function _handleTimeUpdateEvent3(e) {
  // Calculate & set play time display counting backwards
  var dur = this.duration;
  var time = this.currentTime;
  var totalSecondsRemaining = parseInt(dur - time, 10);

  if (!isNaN(totalSecondsRemaining)) {
    _classPrivateMethodGet(this, _populateTimeDisplay, _populateTimeDisplay2).call(this, _classPrivateMethodGet(this, _convertSecondsToTime, _convertSecondsToTime2).call(this, time), _classPrivateMethodGet(this, _convertSecondsToTime, _convertSecondsToTime2).call(this, totalSecondsRemaining, true)); // Set new seek handle position


    _classPrivateFieldGet(this, _PLAYER_OBJECTS).seekHandleBox.setPosition(time);
  }
}

function _loadTrack3(ct) {
  _classPrivateMethodGet(this, _pause2, _pause3).call(this);

  _classPrivateFieldGet(this, _PLAYER_OBJECTS).seekHandleBox.toggleEnable(true);

  _classPrivateFieldGet(this, _PLAYER_OBJECTS).loadProgress.reset();

  _classPrivateFieldSet(this, _CURRENT_TRACK, ct);

  _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Loading track: ' + _classPrivateFieldGet(this, _PLAYLIST).tracks[_classPrivateFieldGet(this, _CURRENT_TRACK)].path);

  _classPrivateFieldGet(this, _AUDIO_ELEMENT).src = _classPrivateFieldGet(this, _PLAYLIST).tracks[_classPrivateFieldGet(this, _CURRENT_TRACK)].path; // Enable track info button if track has info

  if (_classPrivateFieldGet(this, _PLAYLIST).tracks[_classPrivateFieldGet(this, _CURRENT_TRACK)].info.length <= 0) {
    _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Track has NO info.');

    _classPrivateFieldGet(this, _PLAYER_OBJECTS).infoButton.toggle(false);
  } else {
    _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Populating track info...');

    _classPrivateMethodGet(this, _empty, _empty2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).infoScrollContent);

    _classPrivateFieldGet(this, _PLAYER_OBJECTS).infoScrollContent.innerHTML = '<p>' + _classPrivateFieldGet(this, _PLAYLIST).tracks[_classPrivateFieldGet(this, _CURRENT_TRACK)].title + '</p>' + _classPrivateFieldGet(this, _PLAYLIST).tracks[_classPrivateFieldGet(this, _CURRENT_TRACK)].info;

    _classPrivateFieldGet(this, _PLAYER_OBJECTS).infoButton.toggle(true);
  }

  _classPrivateFieldGet(this, _AUDIO_ELEMENT).load();
}

function _pause3(e) {
  _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Pausing.');

  _classPrivateFieldGet(this, _AUDIO_ELEMENT).pause();
}

function _play3(e) {
  _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Playing.');

  _classPrivateFieldGet(this, _PLAYER_OBJECTS).seekHandleBox.toggleEnable(false);

  _classPrivateFieldGet(this, _PLAYER_OBJECTS).seekHandleBox.setMax();

  _classPrivateFieldGet(this, _AUDIO_ELEMENT).play();
}

function _populateTimeDisplay2(current, remain) {
  _classPrivateMethodGet(this, _empty, _empty2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).remainingTime).appendChild(_createTextNode(remain));

  _classPrivateMethodGet(this, _empty, _empty2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).currentTimeDisplay).appendChild(_createTextNode(current));
}

function _removePlayingClassFromAll2() {
  _classPrivateMethodGet(this, _debug, _debug2).call(this, 'Removing classes...');

  _classPrivateFieldGet(this, _PLAYERROOT).classList.remove('playing');

  var current = _classPrivateFieldGet(this, _PLAYER_OBJECTS).playlistBox.getElementsByClassName('current')[0];

  if (current) {
    current.removeAttribute('class');
  }
}

function _setUpPlaylistDisplay2() {
  // Clear list contents
  _classPrivateMethodGet(this, _empty, _empty2).call(this, _classPrivateFieldGet(this, _PLAYER_OBJECTS).playlistBox);

  for (var x = 0; x < _classPrivateFieldGet(this, _PLAYLIST).tracks.length; x++) {
    var li = document.createElement("li"),

    /**
     * Create shortened title
     *
     * @return {String} Shortened title
     */
    shortText = function () {
      var cutoff = 50;

      if (_classPrivateFieldGet(this, _PLAYLIST).tracks[x].title.length <= cutoff) {
        return _classPrivateFieldGet(this, _PLAYLIST).tracks[x].title;
      } else {
        var cut = _classPrivateFieldGet(this, _PLAYLIST).tracks[x].title.substr(0, cutoff),
            split = cut.split(' '),
            pop = split.pop();

        return split.join(' ') + '...';
      }
    }(),
        // Create a new button node & dress it up.
    btn = document.createElement('button');

    btn.appendChild(_createTextNode(shortText));
    btn.setAttribute('data-tracknum', x); // Add to list item

    li.appendChild(btn); // Add to list

    _classPrivateFieldGet(this, _PLAYER_OBJECTS).playlistBox.appendChild(li); // Add event handler


    _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this, btn, 'click', function (e) {
      _classPrivateMethodGet(this, _removePlayingClassFromAll, _removePlayingClassFromAll2).call(this);

      _classPrivateMethodGet(this, _loadTrack2, _loadTrack3).call(this, parseInt(this.getAttribute('data-tracknum')));
    });
  }
}

function _togglePlayerButtons2(state) {
  for (var x = 0; x < _classPrivateFieldGet(this, _PLAYER_CONTROL_NODES).length; x++) {
    _classPrivateFieldGet(this, _PLAYER_CONTROL_NODES)[x].disabled = state;
  }
}

function _updateScreenTitle2(str) {
  _classPrivateFieldGet(this, _PLAYER_OBJECTS).screenTitle.innerHTML = str;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./resources/js/audio.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HTML5AudioPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTML5AudioPlayer */ "./resources/js/HTML5AudioPlayer.js");
/* harmony import */ var _Debugger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Debugger */ "./resources/js/Debugger.js");



window.onload = function (e) {
  var d = new _Debugger__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var playa = new _HTML5AudioPlayer__WEBPACK_IMPORTED_MODULE_0__["default"]('my-boom-box', d);
  playa.init();
};
})();

/******/ })()
;
//# sourceMappingURL=audio.js.map