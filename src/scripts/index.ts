import ScrollReveal from "scrollreveal";
import { selectImage } from "./selectImage";
import { setActiveLink } from "./setActiveLink";

const header = document.querySelector("header");

const divListImg = document.querySelectorAll(
  ".gallery-control"
) as NodeListOf<HTMLDivElement>;

// ================== Stick Navigation Bar ======================

const stickNavBar = (): void => {
  header?.classList.toggle("scroll", window.pageYOffset > 0);
};

stickNavBar();

window.addEventListener("scroll", stickNavBar);

// ================== ScrollReveal animation ======================

const sr = ScrollReveal({
  duration: 3000,
  distance: "80px",
});

sr.reveal(".developer-info", { origin: "bottom", delay: 500 });
sr.reveal(".developer-image", { origin: "top", delay: 500 });
// sr.reveal(".about-selected", { delay: 500 });

// ================== About Gallery select ======================

divListImg.forEach((divImg: HTMLDivElement): void => {
  divImg.addEventListener("click", (): void => {
    selectImage(divImg);
  });
});

window.addEventListener("DOMContentLoaded", (): void => {
  selectImage(divListImg[1]);
  setActiveLink();
});

// ================== Set Active nav-menu-links ======================

window.addEventListener("scroll", (): void => {
  setActiveLink();
});
