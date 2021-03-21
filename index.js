function index() {
	const anchors = document.querySelectorAll("a");
	const divContainer = document.getElementsByClassName("container");

	var node = [];
	for (let day = 1; day < 31; day++) {
		var dayDiv = document.createElement("a");
		dayDiv.setAttribute('id','Day-' + day);
		dayDiv.setAttribute('class','item');
		dayDiv.setAttribute('target','_blank');
		dayDiv.setAttribute('aria-hiddent','true');
		dayDiv.setAttribute('href','/Day-' + day + '/html_day_' + day + '.html');
		dayDiv.innerHTML = "Day " + day;
		divContainer[0].appendChild(dayDiv);
	}

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
