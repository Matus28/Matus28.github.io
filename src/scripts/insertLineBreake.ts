import lineBreake from "../assets/line-breake.png";

const projectBoxStats = document.querySelector(
  ".project-box-stats"
) as HTMLDivElement;
const projects = document.querySelectorAll(
  "section.projects .project"
) as NodeListOf<HTMLDivElement>;

export const insertLineBreake = (): void => {
  const numbOfProjects = projects.length;

  for (let i: number = 0; i < numbOfProjects; i++) {
    if (i > 0) {
      const lineBreakeImg = document.createElement("img") as HTMLImageElement;
      lineBreakeImg.setAttribute("src", lineBreake);
      lineBreakeImg.setAttribute(
        "alt",
        "Image of line for breaking project section."
      );
      lineBreakeImg.classList.add("project-linebreak");
      projectBoxStats.insertBefore(lineBreakeImg, projects[i]);
    }
  }
};
