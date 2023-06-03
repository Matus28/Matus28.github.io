import zeroColorful from "../assets/AboutMe/00-colorful.png";
import oneColorful from "../assets/AboutMe/01-colorful.png";
import twoColorful from "../assets/AboutMe/02-colorful.png";
import threeColorful from "../assets/AboutMe/03-colorful.png";

const imgColorfulArr = [zeroColorful, oneColorful, twoColorful, threeColorful];
const divImages = document.querySelectorAll(
  ".about-image"
) as NodeListOf<HTMLDivElement>;
const selectedImg = document.querySelector(".selected-img") as HTMLImageElement;

export const selectImage = (direction: string): void => {
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

      selectedImg.src = imgColorfulArr[newSelectedID];

      return;
    }
  }
};
