function jsCapture() {
	const divs = document.querySelectorAll("div");
	const buttons = document.querySelector("button");

	function logText(e) {
		console.log(this.classList.value);
		e.stopPropagation();
	}
	divs.forEach(div =>
		div.addEventListener("click", logText, {
			capture: false
		})
	);
	buttons.addEventListener(
		"click",
		() => {
			console.log("You clicked Once. Game Over!");
		},
		{ once: true }
	);
}
window.addEventListener("DOMContentLoaded", jsCapture);
