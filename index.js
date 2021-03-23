function index() {
	const divContainer = document.getElementsByClassName("container");

	function getDataFromJSON(day) {
		let request = new XMLHttpRequest();
		request.open('GET', 'meta-data.json');
		request.responseType = 'json';
		request.send();

		request.onload = function() {
			var metaData = request.response;
			var data = metaData['data'];
			openModal(data[day - 1]);
		}	
	}

	let requestURL = 'meta-data.json';
	let request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();

	request.onload = function() {
		var metaData = request.response;
		days(metaData);
	  }

	function days(metaData) {
		data = metaData['data'];

		for (let day = 1; day <= data.length; day++) {
			const dayMetaData = data[day - 1];
			const title = dayMetaData[day]['title'];
			
			var dayDiv = document.createElement("div");
			dayDiv.setAttribute('id', day);
			dayDiv.setAttribute('class', 'item');
			dayDiv.setAttribute('target', '_blank');
			dayDiv.setAttribute('aria-hiddent', 'true');
			dayDiv.setAttribute('title', title);
			dayDiv.setAttribute('href', '/JavaScript30/Day-' + day + '/html_day_' + day + '.html');

			var dayContainer = document.createElement("div");
			dayContainer.setAttribute('class','item-container');
			dayContainer.setAttribute('id', day);

			var daySubDayDiv = document.createElement("div");
			daySubDayDiv.setAttribute('class','item-day');
			daySubDayDiv.setAttribute('id', day);
			daySubDayDiv.innerHTML = "Day " + day;
			dayContainer.appendChild(daySubDayDiv);

			var titleSubDayDiv = document.createElement("div");
			titleSubDayDiv.setAttribute('class','item-title');
			titleSubDayDiv.setAttribute('id', day);
			titleSubDayDiv.innerHTML = title;
			dayContainer.appendChild(titleSubDayDiv);

			dayDiv.appendChild(dayContainer);
			divContainer[0].appendChild(dayDiv);	
		}
	}

	function openModal(data) {
		for (key in data) {
			var day = key;
			var title = data[key].title;
		}

		var modal = document.createElement("div");
		modal.setAttribute('class','modal');
		modal.setAttribute('id', day);
		
		var modalContent = document.createElement("div");
		modalContent.setAttribute('class','modal-content');

		var visit = document.createElement("a");
		visit.setAttribute('class', 'preview-link');
		visit.setAttribute('target', '_blank');
		visit.setAttribute('aria-hidden', 'true');
		visit.setAttribute('title', title);
		visit.setAttribute('href', '/JavaScript30/Day-' + day + '/html_day_' + day + '.html');
		visit.innerHTML = "Preview";
		modalContent.appendChild(visit);

		var closeModal = document.createElement("span");
		closeModal.setAttribute('class','close');
		closeModal.innerHTML = '&times;';
		modalContent.appendChild(closeModal);

		var modalDay = document.createElement("h2");
		modalDay.setAttribute('class','modal-day');
		modalDay.innerHTML = "Day - " + day;
		modalContent.appendChild(modalDay);

		var modalTitle = document.createElement("h1");
		modalTitle.setAttribute('class','modal-title');
		modalTitle.innerHTML = title;
		modalContent.appendChild(modalTitle);

		var modaldescription = document.createElement("h3");
		modaldescription.setAttribute('class','modal-details');
		modaldescription.innerHTML = "Concept Learnt : (To Be Updated ..)";
		modalContent.appendChild(modaldescription);

		modal.appendChild(modalContent);

		divContainer[0].appendChild(modal);
	}

	document.addEventListener('click', function(e) {
		if ((e.target.className).startsWith('item')) {
			getDataFromJSON(e.target.id);
		} else if (!(e.target.tagName).localeCompare('SPAN')) {
			// const closeModalBtn = document.getElementsByClassName("close");
			const modal = document.getElementsByClassName("modal");
			divContainer[0].removeChild(modal[0]);	
		}
	})
}
window.addEventListener("DOMContentLoaded", index);