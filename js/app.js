//Easy Burger
const searchBurger = document.querySelector('.menu__header');
const burgerActive = document.addEventListener('click', function(){
	searchBurger.classList.toggle('burgerActivate');
    document.body.classList.toggle('burgerLock');
});