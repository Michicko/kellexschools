const hamburger_menu = document.querySelector(".hamburger-menu");
const nav_item_btns = document.querySelectorAll(".nav__item-btn.nav__item-btn--mobile");

hamburger_menu.addEventListener("click", toggleNav);
nav_item_btns.forEach((el) => {
  el.addEventListener("click", toggleNavItemChildren);
});
window.addEventListener('resize', resetNav);

function toggleNav() {
  const mobileNav = document.querySelector(".nav__mobile");
  hamburger_menu.classList.toggle("nav__btn--active");
  mobileNav.classList.toggle("isMobileOpened");
}

function toggleNavItemChildren(e) {
  const btn = e.currentTarget;
  const children = btn.parentElement.nextElementSibling;
  btn.classList.toggle('rotated')
  if (children.classList.contains("isOpened")) {
    children.classList.remove("isOpened");
    children.style.height = 0;
    return;
  }
  children.classList.add("isOpened");
  children.style.height = `${children.scrollHeight}px`;
}

function resetNav(){
  const mobileNav = document.querySelector(".nav__mobile");
  if(window.innerWidth >= 1024){
    hamburger_menu.classList.remove("nav__btn--active");
    mobileNav.classList.remove("isMobileOpened");
  }
}