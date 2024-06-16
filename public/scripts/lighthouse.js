const gallery = document.querySelector(".gallery");
const galleryImages = gallery ? [...gallery.querySelectorAll("img")] : null;
const lighthouseBtn = document.querySelector(".lighthouse__btn");
const lighthouse = document.querySelector(".lighthouse");

if (galleryImages.length > 0) {
  galleryImages.forEach((el) => {
    el.addEventListener("click", openLightHouse);
  });
}

lighthouseBtn.addEventListener("click", closeLightHouse);

function openLightHouse(e) {
  const clickedImg = e.currentTarget;
  const lighthouseImg = document.querySelector(".lighthouse__img");
  lighthouseImg.setAttribute("src", clickedImg.getAttribute("src"));
  lighthouseImg.setAttribute("alt", clickedImg.getAttribute("alt"));
  lighthouse.classList.add("lighthouse--open");
  toggleBodyOverflow();
}

function closeLightHouse() {
  lighthouse.classList.remove("lighthouse--open");
  toggleBodyOverflow();
}

function toggleBodyOverflow() {
  if (lighthouse.classList.contains("lighthouse--open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
}
