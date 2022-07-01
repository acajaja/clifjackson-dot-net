import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';
// import lgShare from 'lightgallery/plugins/share';
// import lgRotate from 'lightgallery/plugins/rotate';
// import lgAutoplay from 'lightgallery/plugins/autoplay';
// import lgFullscreen from 'lightgallery/plugins/fullscreen';

export const makeGall = (id) => {
    lightGallery(document.getElementById(id), {
        autoplayFirstVideo: false,
        controls: true,
        download: false,
        pager: false,
        galleryId: "nature",
        flipHorizontal: false,
        flipVertical: false,
        rotateLeft: false,
        plugins: [
            lgThumbnail
        ],
        mobileSettings: {
            controls: true,
            showCloseIcon: true,
            download: false,
            rotate: false
        }
    });
}
