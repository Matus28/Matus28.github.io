import ScrollReveal from "scrollreveal";
import { selectImage } from "./selectImage";
import { setActiveLink } from "./setActiveLink";
import { projectProgress } from "./projectProgress";
import { sendEmail } from "./sendEmail";

const header = document.querySelector("header");

const divListImg = document.querySelectorAll(
  ".gallery-control"
) as NodeListOf<HTMLDivElement>;

const formButton = document.querySelector(
  ".contact-form button"
) as HTMLButtonElement;

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

// ================== Project progress ======================

let isRendered: boolean = false;

window.addEventListener("scroll", (): void => {
  if (!isRendered) {
    isRendered = projectProgress();
  }
});

// ================== Project progress ======================

formButton.addEventListener("click", (event: MouseEvent): void => {
  event.preventDefault();
  sendEmail();
});
