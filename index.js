// Select DOM Items
const menuBtn = document.querySelector('.menu_btn');
const menuNav = document.querySelector('.menu_nav');
const menuNavUl = document.querySelector('.menu_nav-ul');
const menuNavImg = document.querySelector('.menu_nav-img');
const menuNavItem = document.querySelectorAll('.manu_nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menuNav.classList.add('show');
    menuNavUl.classList.add('show');
    menuNavImg.classList.add('show');
    menuNavItem.forEach(item => item.classList.add('close'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuNav.classList.remove('show');
    menuNavUl.classList.remove('show');
    menuNavImg.classList.remove('show');
    menuNavItem.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
    
  }
}









// const menuBtn = document.querySelector('.menu_btn');
// const menu = document.querySelector('.menu_nav');
// const menuNav = document.querySelector('.menu_nav-ul');
// const menuBranding = document.querySelector('.menu_nav-img');
// const navItems = document.querySelectorAll('.manu_nav-item');

// // Set Initial State Of Menu
// let showMenu = false;

// menuBtn.addEventListener('click', toggleMenu);

// function toggleMenu() {
//   if (!showMenu) {
//     menuBtn.classList.add('close');
//     menu.classList.add('show');
//     menuNav.classList.add('show');
//     menuBranding.classList.add('show');
//     navItems.forEach(item => item.classList.add('show'));

//     // Set Menu State
//     showMenu = true;
//   } else {
//     menuBtn.classList.remove('close');
//     menu.classList.remove('show');
//     menuNav.classList.remove('show');
//     menuBranding.classList.remove('show');
//     navItems.forEach(item => item.classList.remove('show'));

//     // Set Menu State
//     showMenu = false;
//   }
// }