import ScrollReveal from "scrollreveal";
import { selectImage, toggleComment } from "./selectImage";
import { setActiveLink } from "./setActiveLink";
import { projectProgress } from "./projectProgress";
import { sendEmail } from "./sendEmail";
import { openImage } from "./openImage";
import { closeMenu, toggleBurgerMenu } from "./toggleBurgerMenu";

const header = document.querySelector("header");
const divHamburger = document.querySelector(
  ".menu-hamburger"
) as HTMLDivElement;
const divMenuLinks = document.querySelector(".menu-links") as HTMLDivElement;
const divListImg = document.querySelectorAll(
  ".gallery-control"
) as NodeListOf<HTMLDivElement>;
const selectedImg = document.querySelector(
  ".about-selected img"
) as HTMLImageElement;
const informationLine = document.querySelector(
  ".about-selected-comment .information"
) as HTMLImageElement;

const divExperienceList = document.querySelectorAll(
  ".experience-card"
) as NodeListOf<HTMLDivElement>;
const experienceArrowList = document.querySelectorAll(
  ".experience-field-arrow"
) as NodeListOf<HTMLImageElement>;

const formButton = document.querySelector(
  ".contact-form button"
) as HTMLButtonElement;

// ================== Stick Navigation Bar ======================

const stickNavBar = (): void => {
  header?.classList.toggle("scroll", window.pageYOffset > 0);
};

stickNavBar();

window.addEventListener("scroll", stickNavBar);

// ================== HAMBURGER Navigation Bar ======================

divHamburger.addEventListener("click", (): void => {
  toggleBurgerMenu();
});

divMenuLinks.addEventListener("click", (): void => {
  if (divHamburger.classList.contains("opened")) {
    closeMenu();
  }
});

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
  if (!isRendered) {
    isRendered = projectProgress();
  }
});

selectedImg.addEventListener("click", (): void => {
  openImage(selectedImg);
});

informationLine.addEventListener("click", (event: MouseEvent): void => {
  event.stopPropagation();
  toggleComment(informationLine);
});

// ================== Set Active nav-menu-links ======================

window.addEventListener("scroll", (): void => {
  setActiveLink();
});

// ================== Toggle Experience Field elements ======================

experienceArrowList.forEach((experienceArrow: HTMLImageElement): void => {
  experienceArrow.addEventListener("click", (event: MouseEvent): void => {
    const arrowImg = event.target as HTMLImageElement;
    const divExperience = arrowImg.parentElement?.parentElement;
    if (divExperience) divExperience.classList.toggle("closed");
  });
});

// ================== Project progress ======================

let isRendered: boolean = false;

window.addEventListener("scroll", (): void => {
  if (!isRendered) {
    isRendered = projectProgress();
  }
});

// ================== Contact me ======================

formButton.addEventListener("click", (event: MouseEvent): void => {
  event.preventDefault();
  sendEmail();
});
