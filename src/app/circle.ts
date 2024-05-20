class Circle {
  _radius: number;
  _dy: number;
  _gravity: number;
  constructor(public x: number, public y: number) {
    this._radius = Math.random() * 10 + 10;
    this._dy = -5;
    this._gravity = 0.7;
  }

  _draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this._radius, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
  }

  _update(canvasHeight: number) {
    this._dy += this._gravity;
    this.y += this._dy;
    if (this.y + this._radius >= canvasHeight) {
      this.y = canvasHeight - this._radius;
      this._dy = -this._dy * 0.7;
    }
  }
  public static animate(
    ctx: CanvasRenderingContext2D,
    circles: Circle[],
    canvasWidth: number,
    canvasHeight: number
  ) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    circles.forEach((circle) => {
      circle._draw(ctx);
      circle._update(canvasHeight);
    });
    requestAnimationFrame(() =>
      Circle.animate(ctx, circles, canvasWidth, canvasHeight)
    );
  }
}
export default Circle;
