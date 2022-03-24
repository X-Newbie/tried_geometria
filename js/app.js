//Easy Burger
const searchBurger = document.querySelector('.burger');
if  (searchBurger)  {
    const burgerActive = document.querySelector('.menu__header')
    searchBurger.addEventListener('click', function (e) {
        burgerActive.classList.toggle('burgerActivate');
        document.body.classList.toggle('burgerLock');
        searchBurger.classList.toggle('animateBurger');
    });
}
