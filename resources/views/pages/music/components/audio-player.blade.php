<div class="html5-audio-player my-minidisk-skin" id="my-boom-box" data-playlists-url="{{ asset('/media/playlists.json') }}">
    <div class="player-bg-box">
        <div class="outer-circle-bg"></div>
        <div class="outer-circle-frame"></div>
        <div class="play-stop-bg-box"></div>
        <div class="white-circle"></div>
        <div class="user-screen-bg"></div>
    </div>
    <div class="player-controls-box">
        <div class="play-stop-btn-box">
            <button class="play-btn">
                <span></span>
            </button>
        </div>
        <div class="round-buttons">
            <div class="autoplay-btn-box">
                <p>autoplay</p>
                <button class="autoplay-btn"></button>
            </div>
            <div class="playlist-btn-box">
                <p>playlists</p>
                <button class="playlist-btn">
                    <span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>
            <div class="volume-button-box">
                <p>volume</p>
                <button class="volume-button"></button>
            </div>
        </div>
        <div class="time-progress-display">
            <div class="current-time time-displays">00:00</div>
            <div class="remaining-time time-displays">00:00</div>
            <div class="loading-progress-track">
                <div class="loading-bar"></div>
            </div>
            <input class="range-input seek-handle-box" min="0" max="" type="range">
        </div>
        <div class="track-buttons-box">
            <button class="prev-track-btn"></button>
            <button class="next-track-btn"></button>
        </div>
    </div>
    <div class="user-screen">
        <div class="screen-header-box">
            <p class="screen-title"><strong>Playlists</strong></p>
        </div>
        <div class="playlist-container">
            <div class="playlist-container-overflow">
                <ol class="playlist-scroll-box"></ol>
            </div>
            <div class="info-screen">
                <div class="info-scroll-overflow">
                    <div class="info-content-box"></div>
                </div>
            </div>
            <div class="net-stat-box"></div>
        </div>
        <div class="info-button-box">
            <button class="info-button">i</button>
        </div>
    </div>
    <div class="volume-slider-mute-box">
        <input class="range-input volume-slider" max="1" min="0" orient="vertical" step="0.05" type="range">
        <button class="mute-button">M</button>
    </div>
    <div class="player-logo">
        <p>CJ3</p>
        <p>Audio</p>
    </div>
</div>
