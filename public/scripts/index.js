import { submitForm } from "./form";
import { closeLightHouse, openLightHouse } from "./lighthouse";
import { toggleNav, toggleNavItemChildren, resetNav } from "./nav";

// DOM ELEMENTS
const hamburger_menu = document.querySelector(".hamburger-menu");
const nav_items = document.querySelectorAll(
  ".nav__item-btn.nav__item-btn--mobile"
);
const gallery = document?.querySelector(".gallery");
const galleryImages = gallery?.querySelectorAll("img");
const lighthouse_btn = document?.querySelector(".lighthouse__btn");
const admissionForm = document?.querySelector(".form__admission");
const paginationBox = document?.querySelector(".pagination__box");
const paginationButtons = paginationBox?.document.querySelectorAll("button");

// EVENT LISTENERS
hamburger_menu?.addEventListener("click", toggleNav);
nav_items?.forEach((el) => {
  el.addEventListener("click", toggleNavItemChildren);
});
window.addEventListener("resize", resetNav);
galleryImages?.forEach((el) => {
  el.addEventListener("click", openLightHouse);
});
lighthouse_btn?.addEventListener("click", closeLightHouse);
admissionForm?.addEventListener("submit", submitForm);
paginationButtons?.forEach((btn) => {
  let totalPages = 1;
  let page = 1;
  btn.addEventListener("click", () => {
    updatePage(totalPages, page);
  });
});
