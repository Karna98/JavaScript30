function index() {
  const divContainer = document.getElementsByClassName("container");

  function getDataFromJSON(day) {
    let request = new XMLHttpRequest();
    request.open("GET", "meta-data.json");
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

    const modalDay = document.querySelector(
      ".modal .modal-content .modal-header .modal-day"
    );
    modalDay.innerHTML = "Day-" + day;

    const modalTitle = document.querySelector(
      ".modal .modal-body .modal-body-left .modal-title"
    );
    modalTitle.innerHTML = title;

    const modalDetails = document.querySelector(
      ".modal .modal-body .modal-body-left .modal-details"
    );
    modalDetails.innerHTML = "To be Updated ...";

    const anchorPreview = document.querySelector(
      ".modal .modal-body .modal-body-right .modal-preview a"
    );
    anchorPreview.setAttribute(
      "href",
      "/JavaScript30/Day-" + day + "/html_day_" + day + ".html"
    );

    const imagePreview = document.querySelector(
      ".modal .modal-body .modal-body-right .modal-preview img"
    );
    imagePreview.setAttribute("src", "/assets/images/" + day + ".png");
  }

  document.addEventListener("click", function (e) {
    if (e.target.className.startsWith("item")) {
      getDataFromJSON(e.target.id);
    } else if (!e.target.tagName.localeCompare("SPAN")) {
      const modal = document.getElementsByClassName("modal");
      modal[0].style.display = "none";
    }
  });
}
window.addEventListener("DOMContentLoaded", index);
