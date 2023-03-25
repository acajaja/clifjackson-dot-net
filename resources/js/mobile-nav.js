(() => {
    let mediaQuery
    let burgerButton
    let mainNav

    const handleMenu = (e) => {
        e.preventDefault();

        if (mainNav.classList.contains('animate')) {
            mainNav.classList.remove('animate')
            burgerButton.classList.remove('open')
            // burgerButton.classList.add('closed')
        }
        else {
            mainNav.classList.add('animate')
            // burgerButton.classList.remove('closed')
            burgerButton.classList.add('open')
        }
    }

    const connectBurger = () => {
        const eventType = mediaQuery.matches ? 'touchstart' : 'click'
        console.log(`ET: ${eventType}`)
        burgerButton.addEventListener(eventType, handleMenu)
    }

    if (true) {//mediaQuery.matches) {
        document.addEventListener('DOMContentLoaded', (e) => {
            mediaQuery = window.matchMedia('(pointer: coarse)')
            burgerButton = document.getElementById('burger-button')
            mainNav = document.getElementById('main-nav')
            connectBurger()
        })    
    }
})()
