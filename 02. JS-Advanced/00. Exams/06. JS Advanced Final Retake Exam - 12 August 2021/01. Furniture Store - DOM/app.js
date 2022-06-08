window.addEventListener("load", solve);

function solve() {
  const modelInput = document.getElementById("model");
  const yearInput = document.getElementById("year");
  const descriptionInput = document.getElementById("description");
  const priceInput = document.getElementById("price");
  const furnitureList = document.getElementById("furniture-list");
  const totalPrice = document.getElementsByClassName("total-price")[0];

  document.getElementById("add").addEventListener("click", (ev) => {
    if (
      modelInput.value !== "" &&
      yearInput.value !== "" &&
      Number(yearInput.value) >= 0 &&
      descriptionInput.value !== "" &&
      priceInput.value !== "" &&
      Number(priceInput.value) >= 0
    ) {
      addFurniture(
        ev,
        modelInput.value,
        yearInput.value,
        descriptionInput.value,
        priceInput.value
      );
      clearInputs();
    }
  });

  function addFurniture(ev, model, year, description, price) {
    ev.preventDefault();
    const tr = createElement("tr", "", furnitureList);
    tr.setAttribute("class", "info");
    createElement("td", `${model}`, tr);
    createElement("td", `${Number(price).toFixed(2)}`, tr);
    const td = createElement("td", "", tr);
    const moreBtn = createElement("button", "More Info", td);
    const buyItBtn = createElement("button", "Buy it", td);
    moreBtn.setAttribute("class", "moreBtn");
    buyItBtn.setAttribute("class", "buyBtn");
    const trSwitch = createElement("tr", "", furnitureList);
    trSwitch.setAttribute("class", "hide");
    createElement("td", `Year: ${year}`, trSwitch);
    const tdDesc = createElement("td", `Description: ${description}`, trSwitch);
    tdDesc.setAttribute("colspan", 3);
    moreBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
      if (moreBtn.textContent == "More Info") {
        moreBtn.textContent = "Less Info";
        trSwitch.style.display = "contents";
      } else {
        moreBtn.textContent = "More Info";
        trSwitch.style.display = "none";
      }
    });
    buyItBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
      const oldPrice = totalPrice.textContent;
      const sum = Number(oldPrice) + Number(price);
      totalPrice.textContent = sum.toFixed(2);
      ev.target.parentNode.parentNode.remove();
    });
  }

  function createElement(type, content, parent) {
    const el = document.createElement(type);
    el.textContent = content;

    if (parent) {
      parent.appendChild(el);
    }

    return el;
  }

  function clearInputs() {
    modelInput.value = "";
    yearInput.value = "";
    descriptionInput.value = "";
    priceInput.value = "";
  }
}
