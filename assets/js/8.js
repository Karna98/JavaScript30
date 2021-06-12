function letsDraw() {
    const canvas = document.querySelector("#draw");
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.strokeStyle = "red";
    context.lineJoin = "round";
    context.lineCap = "round";
    context.lineWidth = 1;
    context.globalCompositeOperation = "multiply";

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;

    function draw(e) {
        if (!isDrawing) return;
        context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
        hue >= 360 ? (hue = 0) : hue++;
        if (direction == true)
            context.lineWidth > 30 ? (direction = false) : context.lineWidth++;
        else context.lineWidth <= 1 ? (direction = true) : context.lineWidth--;
    }

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener("mouseup", () => (isDrawing = false));
    canvas.addEventListener("mouseout", () => (isDrawing = false));
}
window.addEventListener("DOMContentLoaded", letsDraw);
