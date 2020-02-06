function followMe() {
	const triggers = document.querySelectorAll("a");
	const highlight = document.createElement("span");
	highlight.classList.add("highlight");
	document.body.append(highlight);

	function highlightLinks() {
		const linkCoords = this.getBoundingClientRect();
		const coords = {
			width: linkCoords.width,
			height: linkCoords.height,
			top: linkCoords.top + window.scrollY,
			left: linkCoords.left + window.scrollX
		};
		highlight.style.width = `${linkCoords.width}px`;
		highlight.style.height = `${linkCoords.height}px`;
		highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;
	}
	triggers.forEach(a => a.addEventListener("mouseenter", highlightLinks));
}
window.addEventListener("DOMContentLoaded", followMe);
