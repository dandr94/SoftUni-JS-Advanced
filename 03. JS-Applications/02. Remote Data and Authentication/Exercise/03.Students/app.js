const url = "http://localhost:3030/jsonstore/collections/students";

const elements = {
  tbody: document.querySelector("#results tbody"),
};

function createElement(type, content, parent) {
  const el = document.createElement(type);
  el.textContent = content;

  if (parent) {
    parent.appendChild(el);
  }

  return el;
}

const returnData = async () => {
  const result = await fetch(url);
  return await result.json();
};

const clearFields = (arr) => arr.forEach((x) => (x.value = ""));
const isValidData = (arr) => arr.every((x) => x[1] != "");

function displayStudents(data) {
  elements.tbody.innerHTML = "";

  Object.values(data).forEach((s) => {
    const tr = createElement("tr", "", elements.tbody);

    Object.entries(s).forEach(([k, v]) => {
      if (k !== "_id") {
        k == "grade"
          ? createElement("td", `${Number(v).toFixed(2)}`, tr)
          : createElement("td", v, tr);
      }
    });
  });
}

async function saveStudent(data) {
  const option = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(Object.fromEntries(data)),
  };

  await fetch(url, option);
}

async function submitHandler(ev) {
  const formData = new FormData(ev.target);
  const data = Array.from(formData);
  const innputFields = Array.from(
    document.querySelectorAll("input[type=text]")
  );

  if (isValidData(data)) {
    clearFields(innputFields);
    await saveStudent(data);
    displayStudents(await returnData());
  }
}

document.addEventListener("submit", (ev) => {
  ev.preventDefault();
  submitHandler(ev);
});
