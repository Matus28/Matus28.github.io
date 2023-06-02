import ScrollReveal from "scrollreveal";

const header = document.querySelector("header");

const divImages = document.querySelectorAll(
  ".about-image"
) as NodeListOf<HTMLDivElement>;
const selectedImg = document.querySelector(".selected-img") as HTMLImageElement;
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

const move = (direction: string): void => {
  let newSelectedID: number = -1;

  for (let i: number = 0; i < divImages.length; i++) {
    if (divImages[i].classList.contains("selected")) {
      const divId = parseInt(divImages[i].dataset.id ?? "-1");

      if (divId === 0 && direction === "up") {
        newSelectedID = divImages.length - 1;
        console.log(divImages[3].dataset.id);
      } else if (divId === divImages.length - 1 && direction === "down") {
        newSelectedID = 0;
      } else if (
        divId > 0 &&
        divId <= divImages.length - 1 &&
        direction === "up"
      ) {
        newSelectedID = divId - 1;
      } else if (divId >= 0 && direction === "down") {
        newSelectedID = divId + 1;
      }

      divImages[i].classList.remove("selected");
      divImages[newSelectedID].classList.add("selected");

      selectedImg.src = `public/AboutMe/0${newSelectedID}-colorful.png`;

      return;
    }
  }
};

arrowUp.addEventListener("click", () => {
  move("up");
});

arrowDown.addEventListener("click", () => {
  move("down");
});
