document.addEventListener("DOMContentLoaded", () => {
  const canvasContainer = document.getElementById(
    "canvasContainer"
  ) as HTMLDivElement;
  const clickAnimation = document.getElementById(
    "clickAnimation"
  ) as unknown as SVGSVGElement;

  const createAnimation = (x: number, y: number) => {
    const animationClone = clickAnimation.cloneNode(true) as SVGSVGElement;
    animationClone.style.left = `${x - 50}px`;
    animationClone.style.top = `${y - 50}px`;
    animationClone.style.display = "block";
    canvasContainer.appendChild(animationClone);
    const circle = animationClone.querySelector("circle");
    if (circle) {
      const animations = circle.getElementsByTagName("animate");
      const onAnimationEnd = () => {
        animationClone.classList.add("fadeOut");
        animationClone.addEventListener("transitionend", () => {
          if (canvasContainer.contains(animationClone)) {
            canvasContainer.removeChild(animationClone);
          }
        });
      };

      for (let i = 0; i < animations.length; i++) {
        animations[i].addEventListener("endEvent", onAnimationEnd);
      }
      for (let i = 0; i < animations.length; i++) {
        animations[i].beginElement();
      }
    }
  };
  canvasContainer.addEventListener("click", (event: MouseEvent) => {
    createAnimation(event.clientX, event.clientY);
  });
  canvasContainer.addEventListener("touchstart", (event: TouchEvent) => {
    const touch = event.touches[0];
    createAnimation(touch.clientX, touch.clientY);
  });
});
