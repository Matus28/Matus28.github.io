const progressValue = document.querySelectorAll(
  ".counter span"
) as NodeListOf<HTMLSpanElement>;
const progressCircle = document.querySelectorAll(
  ".project-progress circle"
) as NodeListOf<HTMLElement>;
const progressDiv = document.querySelector(
  ".project-progress"
) as HTMLDivElement;

const elementReached = (element: HTMLElement | null) => {
  const posTop = element ? element.getBoundingClientRect().top : null;

  if (
    element &&
    posTop &&
    window.innerHeight >= posTop + element?.offsetHeight
  ) {
    return true;
  } else {
    return false;
  }
};

const updateValue = (counter: HTMLSpanElement, targetValue: number): void => {
  const currentValue = parseInt(counter.innerText);

  if (currentValue < targetValue) {
    counter.innerText = `${currentValue + 1}`;

    setTimeout((): void => {
      updateValue(counter, targetValue);
    }, 10);
  }
};

export const projectProgress = (): boolean => {
  const isReached = elementReached(progressDiv);
  if (!isReached) return false;

  progressValue.forEach((counter: HTMLSpanElement, index: number): void => {
    const targetValue = parseInt(counter.dataset.value ?? "0");
    const strokeValue = 440 - 440 * (targetValue / 100);

    progressCircle[index].style.setProperty("--target", `${strokeValue}`);

    updateValue(counter, targetValue);
  });

  progressCircle.forEach(
    (circle: HTMLElement) =>
      (circle.style.animation = "fillprogress 2s ease-in-out forwards")
  );

  return true;
};
