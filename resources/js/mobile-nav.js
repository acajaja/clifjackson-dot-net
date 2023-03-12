(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)')
    let mainNav
    const handleTouchStart = (e) => {
        e.preventDefault();
        mainNav.classList.toggle('animate')
    }
    const handleClose = (e) => {
        e.preventDefault();
        mainNav.classList.remove('animate')
    }
    const connectBurger = () => {
        const button = document.getElementById('burger-button')
        button.addEventListener('click', handleTouchStart)
        button.addEventListener('touchstart', handleTouchStart)

        const closeBtn = document.getElementById('close-nav-btn')
        closeBtn.addEventListener('click', handleClose)
        closeBtn.addEventListener('touchstart', handleClose)
    }

    if (true) {//mediaQuery.matches) {
        document.addEventListener('DOMContentLoaded', (e) => {
            mainNav = document.getElementById('main-nav')
            connectBurger()
        })    
    }
})()
