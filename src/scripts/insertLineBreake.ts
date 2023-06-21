import lineBreak from "../assets/line-break.png";

const projectBoxStats = document.querySelector(
  ".project-box-stats"
) as HTMLDivElement;
const projects = document.querySelectorAll(
  "section.projects .project"
) as NodeListOf<HTMLDivElement>;

export const insertLineBreak = (): void => {
  const numbOfProjects = projects.length;

  for (let i: number = 0; i < numbOfProjects; i++) {
    if (i > 0) {
      const lineBreakImg = document.createElement("img") as HTMLImageElement;
      lineBreakImg.setAttribute("src", lineBreak);
      lineBreakImg.setAttribute(
        "alt",
        "Image of line for breaking project section."
      );
      lineBreakImg.classList.add("project-linebreak");
      projectBoxStats.insertBefore(lineBreakImg, projects[i]);
    }
  }
};
