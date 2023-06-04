import zeroColorful from "../assets/AboutMe/00-colorful.png";
import oneColorful from "../assets/AboutMe/01-colorful.png";
import twoColorful from "../assets/AboutMe/02-colorful.png";
import threeColorful from "../assets/AboutMe/03-colorful.png";

const arrowDown = document.querySelector(".arrow-down") as HTMLDivElement;
const imgColorfulArr = [zeroColorful, oneColorful, twoColorful, threeColorful];
const divsImage = document.querySelectorAll(
  ".about-image"
) as NodeListOf<HTMLDivElement>;
const selectedImg = document.querySelector(".selected-img") as HTMLImageElement;
const paragraph = document.querySelector(
  ".about-selected-comment p"
) as HTMLParagraphElement;

const comments = [
  "Capturing the essence of my adventurous spirit in one frame",
  "I started first with industrial robots programming.",
  "My true passion lies in exploring new places and soaking in breathtaking views.",
  "Bringing my CSS skills into the kitchen, I love to style my food creations with flair and creativity",
];

const findSelected = (): HTMLDivElement | null => {
  for (let i: number = 0; i < divsImage.length; i++) {
    if (divsImage[i].classList.contains("selected")) {
      divsImage[i].classList.remove("selected");
      return divsImage[i];
    }
  }

  return null;
};

const moveWithArrow = (direction: string): number => {
  const actualSelected = findSelected();
  const actualID = parseInt(actualSelected?.dataset.id ?? "-1");

  if (actualID === 0 && direction === "up") {
    return divsImage.length - 1;
  } else if (actualID === divsImage.length - 1 && direction === "down") {
    return 0;
  } else if (
    actualID > 0 &&
    actualID <= divsImage.length - 1 &&
    direction === "up"
  ) {
    return actualID - 1;
  } else if (actualID >= 0 && direction === "down") {
    return actualID + 1;
  } else {
    return actualID;
  }
};

const moveWithClick = (clickedDiv: HTMLDivElement): number => {
  const actualSelected = findSelected();
  const actualID = parseInt(actualSelected?.dataset.id ?? "-1");
  const result = parseInt(clickedDiv.dataset.id ?? "-1");

  return result >= 0 ? result : actualID;
};

const selectComment = (ImgID: number): void => {
  paragraph.textContent = comments[ImgID];
};

export const selectImage = (divImage: HTMLDivElement = arrowDown): void => {
  let newSelectedID: number = -1;
  clearInterval(parseInt(localStorage.getItem("interval") ?? "0"));
  localStorage.setItem("interval", `${setInterval(selectImage, 5000)}`);

  if (divImage.classList.contains("arrow-down"))
    newSelectedID = moveWithArrow("down");
  else if (divImage.classList.contains("arrow-up"))
    newSelectedID = moveWithArrow("up");
  else if (divImage.classList.contains("about-image"))
    newSelectedID = moveWithClick(divImage);

  divsImage[newSelectedID].classList.add("selected");
  selectedImg.src = imgColorfulArr[newSelectedID];

  selectComment(newSelectedID);
};
