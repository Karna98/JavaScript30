function makeItCool() {
	const inputs = document.querySelectorAll(".controls input");
	inputs.forEach(input => input.addEventListener("change", updateValue));
	inputs.forEach(input => input.addEventListener("mousemove", updateValue));
}

function updateValue() {
	const measure = this.dataset.sizing || "";
	document.documentElement.style.setProperty(`--${this.name}`, this.value + "" + measure);
}
window.addEventListener("DOMContentLoaded", makeItCool);
