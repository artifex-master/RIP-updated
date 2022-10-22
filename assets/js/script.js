'use strict'

function toggle(element) {
  element.classList.toggle('active');
}

const menu_burger = document.querySelector('.account-nav-burger');
const account_nav = document.querySelector('.account-nav-wrapper');

menu_burger.addEventListener('click', function() {
  toggle(menu_burger);
  toggle(account_nav);
});
