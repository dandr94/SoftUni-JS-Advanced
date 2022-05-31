window.addEventListener("load", solve);

function solve() {
  const productTypeInput = document.getElementById("type-product");
  const descriptionInput = document.getElementById("description");
  const clientNameInput = document.getElementById("client-name");
  const clientPhoneInput = document.getElementById("client-phone");
  const receivedOutput = document.getElementById("received-orders");
  const completedOutput = document.getElementById("completed-orders");

  document.querySelector("#right button").addEventListener("click", (ev) => {
    if (
      productTypeInput.value !== "" &&
      descriptionInput.value !== "" &&
      clientNameInput.value !== "" &&
      clientPhoneInput.value !== ""
    ) {
      receivedForm(
        ev,
        productTypeInput.value,
        descriptionInput.value,
        clientNameInput.value,
        clientPhoneInput.value
      );
      clearInputs();
    }
  });

  document.getElementsByClassName('clear-btn')[0].addEventListener('click', () => {
      completedOutput.innerHTML = ''
  })


  function receivedForm(ev, product, description, name, phone) {
    ev.preventDefault();
    const div = createElement("div");
    div.setAttribute("class", "container");
    createElement("h2", `Product type for repair: ${product}`, div);
    createElement("h3", `Client information: ${name}, ${phone}`, div);
    createElement("h4", `Description of the problem: ${description}`, div);

    let startRepairBtn = createElement("button", "Start repair", div);
    let finishRepairBtn = createElement("button", "Finish repair", div);
    startRepairBtn.setAttribute("class", "start-btn");
    finishRepairBtn.setAttribute("class", "finish-btn");
    finishRepairBtn.disabled = true;

    receivedOutput.appendChild(div);

    startRepairBtn.addEventListener("click", (ev) => {
      finishRepairBtn.disabled = false;
      startRepairBtn.disabled = true;
    });

    finishRepairBtn.addEventListener("click", (ev) =>
      finishRepair(ev, product, description, name, phone)
    );
  }

  function finishRepair(ev, product, description, name, phone) {
    ev.preventDefault();
    ev.target.parentNode.remove();

    const div = createElement("div");
    div.setAttribute("class", "container");
    createElement("h2", `Product type for repair: ${product}`, div);
    createElement("h3", `Client information: ${name}, ${phone}`, div);
    createElement("h4", `Description of the problem: ${description}`, div);

    completedOutput.appendChild(div)
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
    productTypeInput.value = "Computer";
    descriptionInput.value = "";
    clientNameInput.value = "";
    clientPhoneInput.value = "";
  }
}
