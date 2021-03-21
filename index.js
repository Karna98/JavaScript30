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
		dayDiv.setAttribute('href','/JavaScript30/Day-' + day + '/html_day_' + day + '.html');
		dayDiv.innerHTML = "Day " + day;
		divContainer[0].appendChild(dayDiv);
	}
}
window.addEventListener("DOMContentLoaded", index);
