window.addEventListener("load", solve);

function solve() {
  const titleInput = document.getElementById("post-title");
  const categoryInput = document.getElementById("post-category");
  const contentInput = document.getElementById("post-content");
  const outputPending = document.getElementById("review-list");
  const outputApprove = document.getElementById("published-list");

  document.getElementById("publish-btn").addEventListener("click", (ev) => {
    if (
      titleInput.value !== "" &&
      categoryInput.value !== "" &&
      contentInput.value !== ""
    ) {
      publish(ev, titleInput.value, categoryInput.value, contentInput.value);
      clearInputs();
    }
  });

  document.getElementById("clear-btn").addEventListener("click", () => {
    outputApprove.innerHTML = "";
  });

  function publish(ev, title, category, content) {
    ev.preventDefault();
    let li = createElement("li");
    li.setAttribute("class", "rpost");
    let article = createElement("article");
    createElement("h4", `${title}`, article);
    createElement("p", `Category: ${category}`, article);
    createElement("p", `Content: ${content}`, article);
    li.appendChild(article);

    let editBtn = createElement("button", "Edit");
    let approveBtn = createElement("button", "Approve");
    editBtn.setAttribute("class", "action-btn edit");
    approveBtn.setAttribute("class", "action-btn approve");

    li.appendChild(editBtn);
    li.appendChild(approveBtn);

    outputPending.appendChild(li);

    editBtn.addEventListener("click", (ev) =>
      editPost(ev, title, category, content)
    );
    approveBtn.addEventListener("click", (ev) =>
      approvePost(ev, title, category, content)
    );
  }

  function approvePost(ev, title, category, content) {
    ev.preventDefault();
    ev.target.parentNode.remove();
    let li = createElement("li");
    li.setAttribute("class", "rpost");
    let article = createElement("article");
    createElement("h4", `${title}`, article);
    createElement("p", `Category: ${category}`, article);
    createElement("p", `Content: ${content}`, article);
    li.appendChild(article);

    outputApprove.appendChild(li);
  }


  function editPost(ev, title, category, content) {
    ev.preventDefault();
    ev.target.parentNode.remove();

    titleInput.value = title;
    categoryInput.value = category;
    contentInput.value = content;
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
    titleInput.value = "";
    categoryInput.value = "";
    contentInput.value = "";
  }
}

