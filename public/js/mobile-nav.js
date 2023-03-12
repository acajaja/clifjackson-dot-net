/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./resources/js/mobile-nav.js ***!
  \************************************/
(function () {
  var mediaQuery = window.matchMedia('(pointer: coarse)');
  var mainNav;

  var handleTouchStart = function handleTouchStart(e) {
    e.preventDefault();
    mainNav.classList.toggle('animate');
  };

  var handleClose = function handleClose(e) {
    e.preventDefault();
    mainNav.classList.remove('animate');
  };

  var connectBurger = function connectBurger() {
    var button = document.getElementById('burger-button');
    button.addEventListener('click', handleTouchStart);
    button.addEventListener('touchstart', handleTouchStart);
    var closeBtn = document.getElementById('close-nav-btn');
    closeBtn.addEventListener('click', handleClose);
    closeBtn.addEventListener('touchstart', handleClose);
  };

  if (true) {
    //mediaQuery.matches) {
    document.addEventListener('DOMContentLoaded', function (e) {
      mainNav = document.getElementById('main-nav');
      connectBurger();
    });
  }
})();
/******/ })()
;
//# sourceMappingURL=mobile-nav.js.map