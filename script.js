window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0)
    })



    let btn = document.querySelector('.menu-btn'),
        btnSpan = document.querySelector('.menu-btn span'),
        navigation = document.querySelector('.header__navigation-list'),
        headerTop = document.querySelector('.header__top')
        


    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
        btnSpan.classList.toggle('active')
        navigation.classList.toggle('active')
        headerTop.classList.toggle('active')
    })

    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            btn.classList.remove('active')
            btnSpan.classList.remove('active')
            navigation.classList.remove('active')
            headerTop.classList.remove('active')
        })
    })
})