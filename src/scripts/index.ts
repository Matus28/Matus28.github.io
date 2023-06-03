import ScrollReveal from "scrollreveal";
import { selectImage } from "./selectImage";

const header = document.querySelector("header");

const arrowUp = document.querySelector(".arrow-up") as HTMLDivElement;
const arrowDown = document.querySelector(".arrow-down") as HTMLDivElement;

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

arrowUp.addEventListener("click", () => {
  selectImage("up");
});

arrowDown.addEventListener("click", () => {
  selectImage("down");
});
