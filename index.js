function index() {
	const anchors = document.querySelectorAll("a");

	function redirectTo(id) {
		urlId = id.substring(4);
		if (urlId <= 30) {
			url =
				"https://karna98.github.io/JavaScript30/Day-" +
				urlId +
				"/html_day_" +
				urlId +
				".html";
			anchorElement = document.querySelectorAll("a").item(urlId - 1);
			anchorElement.href = url;
		}
	}
	anchors.forEach(anchor =>
		anchor.addEventListener("onclick", function(e) {
			redirectTo(id);
		})
	);
}
window.addEventListener("DOMContentLoaded", index);
