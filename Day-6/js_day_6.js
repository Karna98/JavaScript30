function letSearchIt() {
	const indianCitiesEndpoint =
		"https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/a-detailed-version.json";
	const usaCitiesEndpoint =
		"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
	var sampleData =
		'{ "abad": { "city": "abad", "accentcity": "Abad", "region": "28", "population": null, "latitude": "22.432778", "longitude": "88.777778" }, "abadgarh": { "city": "abadgarh", "accentcity": "Abadgarh", "region": "36", "population": null, "latitude": "29.581389", "longitude": "77.39" }, "abadpura": { "city": "abadpura", "accentcity": "Abadpura", "region": "23", "population": null, "latitude": "31.316667", "longitude": "75.566667" }, "abaibani": { "city": "abaibani", "accentcity": "Abaibani", "region": "28", "population": null, "latitude": "22.3", "longitude": "86.933333" }, "abara": { "city": "abara", "accentcity": "Abara", "region": "35", "population": null, "latitude": "21.733333", "longitude": "78.566667" }, "abbigeri": { "city": "abbigeri", "accentcity": "Abbigeri", "region": "19", "population": null, "latitude": "15.583333", "longitude": "75.766667" }, "abdalpur": { "city": "abdalpur", "accentcity": "Abdalpur", "region": "36", "population": null, "latitude": "29.723889", "longitude": "77.495556" }, "abdul": { "city": "abdul", "accentcity": "Abdul", "region": "16", "population": null, "latitude": "19.666667", "longitude": "76.883333" }, "abdullahpur": { "city": "abdullahpur", "accentcity": "Abdullahpur", "region": "39", "population": null, "latitude": "30.404167", "longitude": "77.887222" }, "abdullanpur": { "city": "abdullanpur", "accentcity": "Abdullanpur", "region": "36", "population": null, "latitude": "30.159444", "longitude": "77.771944" }, "abdullapur": { "city": "abdullapur", "accentcity": "Abdullapur", "region": "36", "population": null, "latitude": "29.546389", "longitude": "77.430556" }, "abdullapuram": { "city": "abdullapuram", "accentcity": "Abdullapuram", "region": "25", "population": null, "latitude": "12.783333", "longitude": "79.666667" }, "abdullun": { "city": "abdullun", "accentcity": "Abdullun", "region": "12", "population": null, "latitude": "34.533333", "longitude": "75.266667" }, "aberdeen": { "city": "aberdeen", "accentcity": "Aberdeen", "region": "01", "population": null, "latitude": "11.666667", "longitude": "92.733333" }, "abersa": { "city": "abersa", "accentcity": "Abersa", "region": "19", "population": null, "latitude": "14.733333", "longitude": "74.3" }, "abhaipur": { "city": "abhaipur", "accentcity": "Abhaipur", "region": "03", "population": null, "latitude": "27.033333", "longitude": "94.333333" }, "abhana": { "city": "abhana", "accentcity": "Abhana", "region": "35", "population": null, "latitude": "23.7", "longitude": "79.533333" }, "abhanpur": { "city": "abhanpur", "accentcity": "Abhanpur", "region": "37", "population": null, "latitude": "21.05", "longitude": "81.716667" }, "abhapuri": { "city": "abhapuri", "accentcity": "Abhapuri", "region": "35", "population": null, "latitude": "21.716667", "longitude": "76.066667" }, "abhayapuri": { "city": "abhayapuri", "accentcity": "Abhayapuri", "region": "03", "population": "15803", "latitude": "26.333333", "longitude": "90.666667" }, "abhiramapuram": { "city": "abhiramapuram", "accentcity": "Abhiramapuram", "region": "25", "population": null, "latitude": "13.027778", "longitude": "80.2575" }, "abhona": { "city": "abhona", "accentcity": "Abhona", "region": "16", "population": null, "latitude": "20.483333", "longitude": "73.916667" }, "abiramam": { "city": "abiramam", "accentcity": "Abiramam", "region": "25", "population": "6837", "latitude": "9.466667", "longitude": "78.45" }, "ablu": { "city": "ablu", "accentcity": "Ablu", "region": "23", "population": null, "latitude": "30.35", "longitude": "74.8" }, "abohar": { "city": "abohar", "accentcity": "Abohar", "region": "23", "population": "130613", "latitude": "30.15", "longitude": "74.183333" }, "abomgaon": { "city": "abomgaon", "accentcity": "Abomgaon", "region": "03", "population": null, "latitude": "26.716667", "longitude": "94.116667" }, "abring": { "city": "abring", "accentcity": "Abring", "region": "12", "population": null, "latitude": "33.7", "longitude": "76.583333" }, "abtare chak": { "city": "abtare chak", "accentcity": "Abtare Chak", "region": "12", "population": null, "latitude": "32.616667", "longitude": "74.866667" }, "abu": { "city": "abu", "accentcity": "Abu", "region": "24", "population": null, "latitude": "24.6", "longitude": "72.7" }, "abul kharana": { "city": "abul kharana", "accentcity": "Abul Kharana", "region": "23", "population": null, "latitude": "30.15", "longitude": "74.55" }, "abur": { "city": "abur", "accentcity": "Abur", "region": "12", "population": null, "latitude": "34.058333", "longitude": "74.534722" }, "abu road": { "city": "abu road", "accentcity": "Abu Road", "region": "24", "population": "50266", "latitude": "24.483333", "longitude": "72.783333" }, "acaro": { "city": "acaro", "accentcity": "Acaro", "region": "33", "population": null, "latitude": "15.533333", "longitude": "73.933333" }, "accarapatam": { "city": "accarapatam", "accentcity": "Accarapatam", "region": "22", "population": null, "latitude": "10.883333", "longitude": "79.833333" }, "acchabal": { "city": "acchabal", "accentcity": "Acchabal", "region": "12", "population": null, "latitude": "33.683333", "longitude": "75.233333" }, "achad": { "city": "achad", "accentcity": "Achad", "region": "09", "population": null, "latitude": "20.216667", "longitude": "72.883333" }, "achalda": { "city": "achalda", "accentcity": "Achalda", "region": "36", "population": null, "latitude": "26.716667", "longitude": "79.416667" }, "achalpur": { "city": "achalpur", "accentcity": "Achalpur", "region": "16", "population": "111287", "latitude": "21.257222", "longitude": "77.508611" }, "achampet": { "city": "achampet", "accentcity": "Achampet", "region": "02", "population": null, "latitude": "16.65", "longitude": "80.133333" }, "achanakmar": { "city": "achanakmar", "accentcity": "Achanakmar", "region": "37", "population": null, "latitude": "22.416667", "longitude": "81.85" }, "achankovil": { "city": "achankovil", "accentcity": "Achankovil", "region": "13", "population": null, "latitude": "9.1", "longitude": "77.133333" }, "acharapokam": { "city": "acharapokam", "accentcity": "Acharapokam", "region": "25", "population": null, "latitude": "12.416667", "longitude": "79.816667" }, "achcharapakkam": { "city": "achcharapakkam", "accentcity": "Achcharapakkam", "region": "25", "population": null, "latitude": "12.416667", "longitude": "79.816667" }, "acheshon": { "city": "acheshon", "accentcity": "Acheshon", "region": "30", "population": null, "latitude": "28.9", "longitude": "95.966667" }, "achhabal": { "city": "achhabal", "accentcity": "Achhabal", "region": "12", "population": null, "latitude": "33.683333", "longitude": "75.233333" }, "achhahad": { "city": "achhahad", "accentcity": "Achhahad", "region": "12", "population": null, "latitude": "33.658333", "longitude": "74.063889" }, "zu-nyu": { "city": "zu-nyu", "accentcity": "Zu-nyu", "region": "20", "population": null, "latitude": "26.966667", "longitude": "95.233333" }, "zurigund": { "city": "zurigund", "accentcity": "Zurigund", "region": "12", "population": null, "latitude": "34.004167", "longitude": "74.7375" }, "zuti": { "city": "zuti", "accentcity": "Zuti", "region": "12", "population": null, "latitude": "34.663889", "longitude": "76.427778" }, "zuvvaladinne": { "city": "zuvvaladinne", "accentcity": "Zuvvaladinne", "region": "02", "population": null, "latitude": "14.8", "longitude": "80.066667" }, "zuzzar": { "city": "zuzzar", "accentcity": "Zuzzar", "region": "12", "population": null, "latitude": "33.6", "longitude": "77.016667" } }';
	const indianCities = [];
	const usaCities = [];
	const sampleCities = [];

	const parseData = Object.entries(JSON.parse(sampleData)).map(data => data[1]);
	sampleCities.push(...parseData);

	fetch(indianCitiesEndpoint)
		.then(data => data.json())
		.then(data => Object.entries(data).map(data => data[1]))
		.then(data => indianCities.push(...data));

	fetch(usaCitiesEndpoint)
		.then(blob => blob.json())
		.then(data => usaCities.push(...data));

	function findMatches(wordToMatch, cities) {
		const regex = new RegExp(wordToMatch, "gi");
		return cities.filter(place => place.city.match(regex));
	}

	function displayMatches() {
		const matchedArr = findMatches(this.value, indianCities);
		const html = matchedArr
			.map(place => {
				if (this.value === "") return;
				const regex = new RegExp(this.value, "gi");
				const cityName = place.city.replace(
					regex,
					`<span class = "hl" > ${this.value} </span>`
				);
				return `
				<li>
					<span class = "name">
						${cityName}
					</span>
					<span class = "latitude">
						Latitude : ${place.latitude}
					</span>
					<span class = "longitude">
						Longitude : ${place.longitude}
					</span>
				</li>
				`;
			})
			.join("");
		suggesstions.innerHTML = html;
	}

	const searchInput = document.querySelector(".search");
	const suggesstions = document.querySelector(".suggestions");

	searchInput.addEventListener("change", displayMatches);
	searchInput.addEventListener("keyup", displayMatches);
}
window.addEventListener("DOMContentLoaded", letSearchIt);
