const hamburger_menu = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".nav__mobile");

const toggleOverBodyOverflow = () => {
  const isOpened = mobileNav.classList.contains('isMobileOpened');
  if (isOpened) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
};

export const toggleNav = () => {
  hamburger_menu.classList.toggle("nav__btn--active");
  mobileNav.classList.toggle("isMobileOpened");
  toggleOverBodyOverflow();
};

export const toggleNavItemChildren = (e) => {
  const btn = e.currentTarget;
  const children = btn.parentElement.nextElementSibling;
  btn.classList.toggle("rotated");
  if (children.classList.contains("isOpened")) {
    children.classList.remove("isOpened");
    children.style.height = 0;
    return;
  }
  children.classList.add("isOpened");
  children.style.height = `${children.scrollHeight}px`;
};

export const resetNav = () => {
  if (window.innerWidth >= 1024) {
    hamburger_menu.classList.remove("nav__btn--active");
    mobileNav.classList.remove("isMobileOpened");
  }
};
