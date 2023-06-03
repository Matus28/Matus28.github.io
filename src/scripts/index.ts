import ScrollReveal from "scrollreveal";
import { selectImage } from "./selectImage";

const header = document.querySelector("header");

const divListImg = document.querySelectorAll(
  ".gallery-control"
) as NodeListOf<HTMLDivElement>;
const selectedImg = document.querySelector(".selected-img") as HTMLImageElement;

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
sr.reveal(".about-selected", { delay: 500 });

// ================== About Gallery select ======================

let isGalleryVisible: boolean = false;

const hasReached = (element: HTMLImageElement): boolean => {
  const topPos = element.getBoundingClientRect().top;

  if (window.innerHeight >= topPos + element.offsetHeight) {
    return true;
  } else {
    return false;
  }
};

divListImg.forEach((divImg: HTMLDivElement): void => {
  divImg.addEventListener("click", (): void => {
    selectImage(divImg);
  });
});

window.addEventListener("DOMContentLoaded", (): void => {
  selectImage(divListImg[1]);
});
