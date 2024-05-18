import "./styles/style.css";
import "./app/eyeMovements";
import "./app/preventClick";
import Circle from "./app/circle";

window.onload = function () {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  window.addEventListener("resize", resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 5;
  }
  resizeCanvas();

  const maxCircles = 15;
  const circles: Circle[] = [];

  canvas.addEventListener("click", handleClick);

  function handleClick(event: MouseEvent) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const newCircle = new Circle(mouseX, mouseY);

    circles.push(newCircle);

    setTimeout(() => {
      const index = circles.indexOf(newCircle);
      index > -1 && circles.splice(index, 1);
    }, 5000);

    circles.length > maxCircles && circles.shift();
  }

  Circle.animate(ctx, circles, canvas.width, canvas.height);
};
