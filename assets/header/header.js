'use strict'

const toggleFunc = (elem) => {
  elem.classList.toggle('active');
}

const isOpenedFunc = (elem) => {
  elem.classList.toggle('is-opened');
}


const menu_burger = document.querySelector('.menu-burger-wrapper');
const menu_sidebar = document.querySelector('.menu-sidebar');
const close_btn = document.querySelector('.closeSidebarBtn');

menu_burger.addEventListener('click', function() {
  toggleFunc(menu_burger);
  isOpenedFunc(menu_sidebar);
});



