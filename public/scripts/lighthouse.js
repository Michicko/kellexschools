const lighthouse = document.querySelector(".lighthouse");

const toggleBodyOverflow = () => {
  if (lighthouse.classList.contains("lighthouse--open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
}

export const openLightHouse = (e) => {
  const clickedImg = e.currentTarget;
  const lighthouseImg = document.querySelector(".lighthouse__img");
  lighthouseImg.setAttribute("src", clickedImg.getAttribute("src"));
  lighthouseImg.setAttribute("alt", clickedImg.getAttribute("alt"));
  lighthouse.classList.add("lighthouse--open");
  toggleBodyOverflow();
}

export const closeLightHouse = () => {
  lighthouse.classList.remove("lighthouse--open");
  toggleBodyOverflow();
}


