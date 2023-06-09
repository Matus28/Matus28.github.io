import { clearAllIntervals, restartInterval, selectImage } from "./selectImage";
import leftArrowPATH from "../assets/icons/arrow-left-gallery.svg";
import rightArrowPATH from "../assets/icons/arrow-right-gallery.svg";
import closePATH from "../assets/icons/close.svg";

const body = document.querySelector("body");
const main = document.querySelector("main") as HTMLElement;
const leftArrowMain = document.querySelector(
  ".arrow-left.gallery-control"
) as HTMLDivElement;
const rightArrowMain = document.querySelector(
  ".arrow-right.gallery-control"
) as HTMLDivElement;

const background = document.createElement("div");
const divBigImage = document.createElement("div");
const bigImage = document.createElement("img");
const closeImage = document.createElement("img");
const leftArrow = document.createElement("img");
const rightArrow = document.createElement("img");

export const openImage = (image: HTMLImageElement): void => {
  clearAllIntervals();

  const pageHeight = body?.scrollHeight;

  background.classList.add("about-selected-background");
  background.style.height = `${pageHeight}px`;
  main.append(background);

  divBigImage.classList.add("about-selected-container");
  main.append(divBigImage);

  leftArrow.classList.add("about-selected");
  leftArrow.classList.add("arrow-left-bigger");
  leftArrow.setAttribute("src", leftArrowPATH);
  leftArrow.setAttribute("tabindex", "0");
  divBigImage.append(leftArrow);

  bigImage.classList.add("about-selected-image-bigger");
  bigImage.setAttribute("src", image.getAttribute("src") ?? "");
  bigImage.style.maxWidth = `${window.innerWidth * 0.8}px`;
  bigImage.style.maxHeight = `${window.innerHeight * 0.8}px`;
  divBigImage.append(bigImage);

  rightArrow.classList.add("about-selected");
  rightArrow.classList.add("arrow-right-bigger");
  rightArrow.setAttribute("src", rightArrowPATH);
  rightArrow.setAttribute("tabindex", "0");
  divBigImage.append(rightArrow);

  closeImage.classList.add("about-selected-close");
  closeImage.setAttribute("src", closePATH);
  closeImage.setAttribute("alt", "Icon of closing the bigger picture view.");
  closeImage.setAttribute("tabindex", "0");
  divBigImage.append(closeImage);

  updatePosition();
};

const updatePosition = (): void => {
  const divBigImageHeight = divBigImage.offsetHeight;
  const divBigImageWidth = divBigImage.offsetWidth;
  const translateTop = (window.innerHeight - divBigImageHeight) / 2;
  const translateLeft = (window.innerWidth - divBigImageWidth) / 2;
  divBigImage.style.top = `${window.scrollY}px`;
  divBigImage.style.left = "0px";
  divBigImage.style.transform = `translate(${translateLeft}px, ${translateTop}px)`;
  bigImage.style.maxWidth = `${window.innerWidth * 0.8}px`;
  bigImage.style.maxHeight = `${window.innerHeight * 0.8}px`;
};
const close = (): void => {
  background.remove();
  bigImage.remove();
  leftArrow.remove();
  rightArrow.remove();
  closeImage.remove();
  restartInterval();
};

[background, closeImage].forEach((element: HTMLElement) => {
  element.addEventListener("click", (): void => {
    close();
  });
});

leftArrow.addEventListener("click", (): void => {
  selectImage(leftArrowMain);
});

rightArrow.addEventListener("click", (): void => {
  selectImage(rightArrowMain);
});

window.addEventListener("scroll", (): void => {
  updatePosition();
});
