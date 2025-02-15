function storeItLocally() {
    const addItems = document.querySelector(".add-items");
    const itemsList = document.querySelector(".plates");
    const items = JSON.parse(localStorage.getItem("items")) || [];

    function addItem(e) {
        e.preventDefault();
        const itemName = this.querySelector("[name=item]").value;
        const item = {
            itemName,
            done: false,
        };
        items.push(item);
        populateList(items, itemsList);
        localStorage.setItem("items", JSON.stringify(items));
        this.reset();
    }

    function populateList(plates = [], platesList) {
        platesList.innerHTML = plates
            .map((plate, i) => {
                return `
                <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${
                    plate.done ? "checked" : ""
                }/>
                <label for="item${i}">${plate.itemName}</label>
                </li>
            `;
            })
            .join("");
    }

    function toggleDone(e) {
        if (!e.target.matches("input")) return;
        const element = e.target;
        const index = element.dataset.index;
        items[index].done = !items[index].done;
        localStorage.setItem("items", JSON.stringify(items));
        populateList(items, itemsList);
    }
    addItems.addEventListener("submit", addItem);
    itemsList.addEventListener("click", toggleDone);
    populateList(items, itemsList);
}
window.addEventListener("DOMContentLoaded", storeItLocally);
