let menu = document.querySelector('.menu')
let menuItems = document.querySelectorAll(".menuItem");
let hamburgerBtn = document.querySelector(".hamburger");
let closeIcon = document.querySelector('closeIcon');
let menuIcon = document.querySelector('menuIcon');

function toggleMenu() {
  menu.classList.toggle('showMenu');
  hamburgerBtn.classList.toggle('hamburgerClicked');
  console.log('clicked');
}
menuItems.forEach((eachItem) => { 
    eachItem.addEventListener("click", toggleMenu);
  }
)
hamburgerBtn.addEventListener('click', toggleMenu);
