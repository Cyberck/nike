window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0)
    })



    let btn = document.querySelector('.menu-btn'),
        btnSpan = document.querySelector('.menu-btn span'),
        navigation = document.querySelector('.nav__list'),
        headerTop = document.querySelector('.nav__top')
        


    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
        btnSpan.classList.toggle('active')
        navigation.classList.toggle('active')
        headerTop.classList.toggle('active')
    })


})