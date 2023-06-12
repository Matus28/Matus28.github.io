const divHamburger = document.querySelector(
  ".menu-hamburger"
) as HTMLDivElement;
const divMenuLinks = document.querySelector(".menu-links") as HTMLDivElement;

const darkBackground = document.createElement("div");

darkBackground.classList.add("menu-background");

const body = document.querySelector("body");
const main = document.querySelector("main") as HTMLElement;

export const closeMenu = (): void => {
  divHamburger.classList.remove("opened");
  divMenuLinks.classList.remove("opened");
  darkBackground.remove();
};

export const toggleBurgerMenu = (): void => {
  darkBackground.style.height = `${body?.scrollHeight}px`;
  divHamburger.classList.toggle("opened");
  divMenuLinks.classList.toggle("opened");

  if (divHamburger.classList.contains("opened")) {
    main.append(darkBackground);
  } else {
    darkBackground.remove();
  }
};

darkBackground.addEventListener("click", (): void => {
  closeMenu();
});
