import ScrollReveal from "scrollreveal";
import { selectImage } from "./selectImage";
import { setActiveLink } from "./setActiveLink";
import { projectProgress } from "./projectProgress";
import { sendEmail } from "./sendEmail";
import { openImage } from "./openImage";

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
const darkBackground = document.createElement("div");

const body = document.querySelector("body");
const main = document.querySelector("main") as HTMLElement;

const closeMenu = (): void => {
  divHamburger.classList.remove("opened");
  divMenuLinks.classList.remove("opened");
  darkBackground.remove();
};

darkBackground.classList.add("menu-background");

divHamburger.addEventListener("click", (): void => {
  darkBackground.style.height = `${body?.scrollHeight}px`;
  divHamburger.classList.toggle("opened");
  divMenuLinks.classList.toggle("opened");

  if (divHamburger.classList.contains("opened")) {
    main.append(darkBackground);
  } else {
    darkBackground.remove();
  }
});

darkBackground.addEventListener("click", (): void => {
  closeMenu();
});

window.addEventListener("scroll", (): void => {
  console.log(body?.scrollHeight);
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

// ================== Contact me ======================

formButton.addEventListener("click", (event: MouseEvent): void => {
  event.preventDefault();
  sendEmail();
});
