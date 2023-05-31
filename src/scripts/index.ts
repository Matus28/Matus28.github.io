const header = document.querySelector("header");

// ================== Stick Navigation Bar ======================

const stickNavBar = (): void => {
  header?.classList.toggle("scroll", window.pageYOffset > 0);
};

stickNavBar();

window.addEventListener("scroll", stickNavBar);
