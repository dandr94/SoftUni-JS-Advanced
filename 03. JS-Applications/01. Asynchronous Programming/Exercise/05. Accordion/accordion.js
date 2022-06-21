const elements = {
  main: document.getElementById("main"),
};

function createElement(type, content, parent, cls) {
  const el = document.createElement(type);
  el.textContent = content;
  if (cls) {
    el.className = cls;
  }

  if (parent) {
    parent.appendChild(el);
  }

  return el;
}
const returnData = async (suffix) => {
  const result = await fetch(
    `http://localhost:3030/jsonstore/advanced/articles/${suffix}`
  );
  return result.json();
};

const display = (el, value) => (el.style.display = value);

function main(title) {
  const templateDiv = createElement("div", "", elements.main, "accordion");
  const titleDiv = createElement("div", "", templateDiv, "head");
  createElement("span", `${title.title}`, titleDiv);
  const btn = createElement("button", "More", titleDiv, "button");
  const extraInfoDiv = createElement("div", "", templateDiv, "extra");
  display(extraInfoDiv, "none");

  btn.addEventListener("click", async () => {
    if (btn.textContent == "More") {
      const moreData = await returnData(`details/${title._id}`);
      createElement("p", `${moreData.content}`, extraInfoDiv);
      display(extraInfoDiv, "block");
      btn.textContent = "Less";
    } else {
      btn.textContent = "More";
      display(extraInfoDiv, "none");
      extraInfoDiv.innerHTML = "";
    }
  });
}

async function solution() {
  const titles = await returnData("list");
  titles.forEach((t) => {
    main(t);
  });
}

document.addEventListener("DOMContentLoaded", solution);
