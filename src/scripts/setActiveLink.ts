import { SectionData } from "./types";

const header = document.querySelector("header");
const navMenuLinks = document.querySelectorAll(
  ".nav-menu-links"
) as NodeListOf<HTMLAnchorElement>;

const setAllLinks = (currentSection: SectionData): void => {
  navMenuLinks.forEach((link: HTMLAnchorElement): void => {
    if (link.textContent?.toLowerCase() === currentSection.id) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

export const setActiveLink = (): void => {
  const sections = document.querySelectorAll("section[id]");
  const sectionsArray = Array.from(sections).map(
    (section: Element): SectionData => {
      return {
        y: section.getBoundingClientRect().top - (header?.offsetHeight ?? 0),
        id: section.id,
      };
    }
  );
  const passedSections = sectionsArray.filter((section: SectionData) => {
    return section.y <= 0;
  });
  const currentSection = passedSections[passedSections.length - 1];

  setAllLinks(currentSection);
};
