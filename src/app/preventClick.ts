let canvas = document.getElementById("canvas") as HTMLElement;

function preventClick() {
  document.body.classList.add("show-cursor");
  canvas.classList.remove("no-click");
}
setTimeout(preventClick, 12500);
