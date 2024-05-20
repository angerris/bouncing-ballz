const overlay: HTMLElement = document.getElementById("overlay");

setTimeout(function () {
  overlay.classList.add("visuallyHidden");
}, 8000);

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  if (preloader && content) {
    preloader.style.display = "none";
    content.style.display = "block";
  }
});
