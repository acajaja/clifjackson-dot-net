/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./resources/js/mobile-nav.js ***!
  \************************************/
(function () {
  var mediaQuery;
  var burgerButton;
  var mainNav;

  var handleMenu = function handleMenu(e) {
    e.preventDefault();

    if (mainNav.classList.contains('animate')) {
      mainNav.classList.remove('animate');
      burgerButton.classList.remove('open'); // burgerButton.classList.add('closed')
    } else {
      mainNav.classList.add('animate'); // burgerButton.classList.remove('closed')

      burgerButton.classList.add('open');
    }
  };

  var connectBurger = function connectBurger() {
    var eventType = mediaQuery.matches ? 'touchstart' : 'click';
    console.log("ET: ".concat(eventType));
    burgerButton.addEventListener(eventType, handleMenu);
  };

  if (true) {
    //mediaQuery.matches) {
    document.addEventListener('DOMContentLoaded', function (e) {
      mediaQuery = window.matchMedia('(pointer: coarse)');
      burgerButton = document.getElementById('burger-button');
      mainNav = document.getElementById('main-nav');
      connectBurger();
    });
  }
})();
/******/ })()
;
//# sourceMappingURL=mobile-nav.js.map