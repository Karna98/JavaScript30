function index() {
  function getDataFromJSON(day) {
    let request = new XMLHttpRequest();
    request.open("GET", "assets/meta-data.json");
    request.responseType = "json";
    request.send();

    request.onload = function () {
      var metaData = request.response;
      var data = metaData["data"];
      openModal(data[day - 1]);
    };
  }

  function openModal(data) {
    for (key in data) {
      var day = key;
      var title = data[key].title;
    }

    const modalDiv = document.getElementsByClassName("modal");
    modalDiv[0].style.display = "flex";

    const href = '"/JavaScript30/Day-' + day + '/html_day_' + day + '.html"';
    const src = '"/JavaScript30/assets/images/' + day + '.png"';

    // const href = '"/Day/' + day + '.html"';
    // const src = '"/assets/images/' + day + '.png"';

    modalDiv[0].innerHTML =
      `
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-day">Day-` +
      day +
      `</div>
        <span class="close">×</span>
      </div>
      <div class="modal-body">
        <div class="modal-body-left">
          <div class="modal-title">` +
      title +
      `</div>
          <div class="modal-details">To be Updated ...</div>
        </div>
        <div class="modal-body-right">
          <div class="modal-preview">
            <a
              role="button"
              rel="noopener noreferrer"
              href=` + href + `
              target="_blank"
              aria-hidden="true"
              title="Preview"
            >
              <img class="image" src=` + src + `alt="Preview Project" />
              <div>
                <div class="text">&#x1F517;</div>
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
