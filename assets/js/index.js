function index() {
    function getDataFromJSON(day) {
        let request = new XMLHttpRequest();
        request.open("GET", "assets/json/meta-data.json");
        request.responseType = "json";
        request.send();

        request.onload = function () {
            const data = request.response["data"];
            openModal(data[day - 1]);
        };
    }

    function refineContent(content) {
        linksHtml = "";
        for (const link of content) {
            linksHtml += `<li><a href=${link.link} target='_blank'>${link.value}</a></li>`;
        }
        return `<ul>${linksHtml}</ul>`;
    }

    function openModal(data) {
        let day, title, description, references;
        for (key in data) {
            day = key;
            title = data[key].title;
            description = data[key].description;
            references = data[key].references;
        }

        const modalDiv = document.getElementsByClassName("modal");
        modalDiv[0].style.display = "flex";

        const href = `/JavaScript30/Day/${day}.html`;
        const src = `/JavaScript30/assets/images/preview/${day}.jpg`;

        modalDiv[0].innerHTML = `
            <div class="modal-content">
            <div class="modal-header">
                <div class="modal-day">
                    Day-${day}
                </div>
                <span class="close">×</span>
            </div>
            <div class="modal-body">
                <div class="modal-body-left">
                    <div class="modal-title">
                        ${title}
                    </div>
                    <div class="modal-details">
                        <div class="description">
                            ${description}
                        </div>
                        <div>
                            <b><i>References:</i></b> <br>
                            ${refineContent(references)}
                        </div>
                    </div>
                </div>
                <div class="modal-body-right">
                    <div class="modal-preview">
                        <a
                            role="button"
                            rel="noopener noreferrer"
                            href=${href}
                            target="_blank"
                            aria-hidden="true"
                            title="Preview"
                        >
                            <img class="image" src=${src} alt="Preview Project" />
                            <div>
                                <div class="text">
                                    &#x1F517;
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
    }

    document.addEventListener("click", function (e) {
        if (e.target.className.startsWith("item")) {
            getDataFromJSON(e.target.id);
        } else if (!e.target.tagName.localeCompare("SPAN")) {
            const modal = document.getElementsByClassName("modal");
            modal[0].style.display = "none";
            modal[0].textContent = "";
        }
    });
}
window.addEventListener("DOMContentLoaded", index);
