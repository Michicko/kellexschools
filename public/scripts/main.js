const $271054a7f1e58087$var$sendApplication = async (data)=>{
    const response = await fetch("http://localhost:8001/api/v1/applications", {
        method: "POST",
        body: data
    });
    return response;
};
const $271054a7f1e58087$export$e02251cfbe407ee6 = async (e)=>{
    e.preventDefault();
    const applicationBtn = document.querySelector(".application-btn");
    const admissionForm = document.querySelector(".form__admission");
    const formData = new FormData(admissionForm);
    try {
        const res = await $271054a7f1e58087$var$sendApplication(formData);
        applicationBtn.textContent = "Submitting...";
        console.log(res);
        applicationBtn.textContent = "Submit & Continue";
    } catch (error) {
        console.log(error);
        applicationBtn.textContent = "Submit & Continue";
    }
};


const $ad8d5099795b9640$var$lighthouse = document.querySelector(".lighthouse");
const $ad8d5099795b9640$var$toggleBodyOverflow = ()=>{
    if ($ad8d5099795b9640$var$lighthouse.classList.contains("lighthouse--open")) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
};
const $ad8d5099795b9640$export$2dab2fa499080fc6 = (e)=>{
    const clickedImg = e.currentTarget;
    const lighthouseImg = document.querySelector(".lighthouse__img");
    lighthouseImg.setAttribute("src", clickedImg.getAttribute("src"));
    lighthouseImg.setAttribute("alt", clickedImg.getAttribute("alt"));
    $ad8d5099795b9640$var$lighthouse.classList.add("lighthouse--open");
    $ad8d5099795b9640$var$toggleBodyOverflow();
};
const $ad8d5099795b9640$export$edc0b0c102c03a3b = ()=>{
    $ad8d5099795b9640$var$lighthouse.classList.remove("lighthouse--open");
    $ad8d5099795b9640$var$toggleBodyOverflow();
};


const $d7825d304ed701cc$var$hamburger_menu = document.querySelector(".hamburger-menu");
const $d7825d304ed701cc$var$mobileNav = document.querySelector(".nav__mobile");
const $d7825d304ed701cc$var$toggleOverBodyOverflow = ()=>{
    const isOpened = $d7825d304ed701cc$var$mobileNav.classList.contains("isMobileOpened");
    if (isOpened) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
};
const $d7825d304ed701cc$export$5f369a232c295ed1 = ()=>{
    $d7825d304ed701cc$var$hamburger_menu.classList.toggle("nav__btn--active");
    $d7825d304ed701cc$var$mobileNav.classList.toggle("isMobileOpened");
    $d7825d304ed701cc$var$toggleOverBodyOverflow();
};
const $d7825d304ed701cc$export$a3fdce67cbbe4327 = (e)=>{
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
const $d7825d304ed701cc$export$5a03bb8a7bee11d6 = ()=>{
    if (window.innerWidth >= 1024) {
        $d7825d304ed701cc$var$hamburger_menu.classList.remove("nav__btn--active");
        $d7825d304ed701cc$var$mobileNav.classList.remove("isMobileOpened");
    }
};


// DOM ELEMENTS
const $09099dd681ddaa5f$var$hamburger_menu = document.querySelector(".hamburger-menu");
const $09099dd681ddaa5f$var$nav_items = document.querySelectorAll(".nav__item-btn.nav__item-btn--mobile");
const $09099dd681ddaa5f$var$gallery = document?.querySelector(".gallery");
const $09099dd681ddaa5f$var$galleryImages = $09099dd681ddaa5f$var$gallery?.querySelectorAll("img");
const $09099dd681ddaa5f$var$lighthouse_btn = document?.querySelector(".lighthouse__btn");
const $09099dd681ddaa5f$var$admissionForm = document?.querySelector(".form__admission");
const $09099dd681ddaa5f$var$paginationBox = document?.querySelector(".pagination__box");
const $09099dd681ddaa5f$var$paginationButtons = $09099dd681ddaa5f$var$paginationBox?.document.querySelectorAll("button");
// EVENT LISTENERS
$09099dd681ddaa5f$var$hamburger_menu?.addEventListener("click", (0, $d7825d304ed701cc$export$5f369a232c295ed1));
$09099dd681ddaa5f$var$nav_items?.forEach((el)=>{
    el.addEventListener("click", (0, $d7825d304ed701cc$export$a3fdce67cbbe4327));
});
window.addEventListener("resize", (0, $d7825d304ed701cc$export$5a03bb8a7bee11d6));
$09099dd681ddaa5f$var$galleryImages?.forEach((el)=>{
    el.addEventListener("click", (0, $ad8d5099795b9640$export$2dab2fa499080fc6));
});
$09099dd681ddaa5f$var$lighthouse_btn?.addEventListener("click", (0, $ad8d5099795b9640$export$edc0b0c102c03a3b));
$09099dd681ddaa5f$var$admissionForm?.addEventListener("submit", (0, $271054a7f1e58087$export$e02251cfbe407ee6));
$09099dd681ddaa5f$var$paginationButtons?.forEach((btn)=>{
    let totalPages = 1;
    let page = 1;
    btn.addEventListener("click", ()=>{
        updatePage(totalPages, page);
    });
});


//# sourceMappingURL=main.js.map
