import "./styles/style.css";
import "./app/eyeMovements";
import "./app/preventClick";
import "./app/functions";
import Circle from "./app/circle";

function canvas() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  window.addEventListener("resize", resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 20;
  }
  resizeCanvas();

  const maxCircles = 15;
  const circles: Circle[] = [];

  canvas.addEventListener("click", handleClick);
  canvas.addEventListener("touchstart", handleTouch);

  function handleClick(event: MouseEvent) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    spawnCircle(mouseX, mouseY);
  }

  function handleTouch(event: TouchEvent) {
    event.preventDefault();
    const rect = canvas.getBoundingClientRect();
    for (let i = 0; i < event.touches.length; i++) {
      const touchX = event.touches[i].clientX - rect.left;
      const touchY = event.touches[i].clientY - rect.top;
      spawnCircle(touchX, touchY);
    }
  }

  function spawnCircle(x: number, y: number) {
    const newCircle = new Circle(x, y);
    circles.push(newCircle);

    setTimeout(() => {
      const index = circles.indexOf(newCircle);
      index > -1 && circles.splice(index, 1);
    }, 5000);

    circles.length > maxCircles && circles.shift();
  }

  Circle.animate(ctx, circles, canvas.width, canvas.height);
}
canvas();
