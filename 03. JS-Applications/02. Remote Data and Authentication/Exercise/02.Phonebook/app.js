const url = `http://localhost:3030/jsonstore/phonebook`;
const elements = {
  createBtn: document.getElementById("btnCreate"),
  loadBtn: document.getElementById("btnLoad"),
  phoneBook: document.getElementById("phonebook"),
};

function createElement(type, content, parent, _id) {
  const el = document.createElement(type);
  el.textContent = content;
  if (_id) {
    el.id = _id;
  }

  if (parent) {
    parent.appendChild(el);
  }

  return el;
}

const returnData = async (url) => {
  const result = await fetch(url);
  return result.json();
};

async function loadData() {
  const data = await returnData(url);
  elements.phoneBook.innerHTML = "";
  Object.values(data).map((x) => {
    const li = createElement(
      "li",
      `${x.person}: ${x.phone}`,
      elements.phoneBook,
      x._id
    );
    const deleteBtn = createElement("button", "Delete", li, "deleteBtn");
    deleteBtn.addEventListener("click", deleteData);
  });
}

async function createData() {
  const person = document.getElementById("person");
  const phone = document.getElementById("phone");

  if (person.value !== "" || phone.value !== "") {
    const data = { person: person.value, phone: phone.value };
    const option = {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    };

    person.value = "";
    phone.value = "";

    await fetch(url, option);
  }
}

async function deleteData(ev) {
  const id = ev.target.parentNode.id;
  ev.target.parentNode.remove();

  await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
}

function attachEvents() {
  elements.loadBtn.addEventListener("click", loadData);

  elements.createBtn.addEventListener("click", createData);
}

attachEvents();
