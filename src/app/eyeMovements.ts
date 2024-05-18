const eye = document.querySelector(".eye") as HTMLElement;
const pupil = document.querySelector(".pupil") as HTMLElement;

document.addEventListener("mousemove", (event) => {
  const eyeRect = eye.getBoundingClientRect();
  const eyeX = eyeRect.left + eyeRect.width / 2;
  const eyeY = eyeRect.top + eyeRect.height / 2;

  const deltaX = event.clientX - eyeX;
  const deltaY = event.clientY - eyeY;
  const angle = Math.atan2(deltaY, deltaX);

  const maxRadius = eyeRect.width / 2 - pupil.offsetWidth / 2;
  const distance = Math.min(
    Math.sqrt(deltaX * deltaX + deltaY * deltaY),
    maxRadius
  );

  const pupilX = distance * Math.cos(angle);
  const pupilY = distance * Math.sin(angle);

  pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});
