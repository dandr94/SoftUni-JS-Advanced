function solve() {
  const authorInput = document.getElementById("creator");
  const titleInput = document.getElementById("title");
  const categoryInput = document.getElementById("category");
  const contentInput = document.getElementById("content");
  const createBtn = document.getElementsByClassName("btn create")[0];
  const posts = document.getElementsByTagName("section")[1];
  const ol = document.getElementsByTagName("ol")[0];
  let arr = [];
  createBtn.addEventListener("click", (ev) => {
    createHandler(
      ev,
      authorInput.value,
      titleInput.value,
      categoryInput.value,
      contentInput.value
    );
    clearInputs();
  });

  function createHandler(ev, author, title, category, content) {
    ev.preventDefault();
    const article = createElement("article", "", posts);
    createElement("h1", `${title}`, article);
    const categoryP = createElement("p", "Category:", article);
    createElement("strong", `${category}`, categoryP);
    const creatorP = createElement("p", "Creator:", article);
    createElement("strong", `${author}`, creatorP);
    createElement("p", `${content}`, article);
    const div = createElement("div", "", article, 'buttons');
    const deleteBtn = createElement("button", "Delete", div, 'btn delete');
    const archiveBtn = createElement("button", "Archive", div, 'btn archive');

    deleteBtn.addEventListener("click", (ev) => {
      ev.target.parentNode.parentNode.remove();
    });
    archiveBtn.addEventListener("click", (ev) => {
      ev.target.parentNode.parentNode.remove();
      ol.innerHTML = "";
      arr.push(title);

      arr
        .sort((a, b) => a.localeCompare(b))
        .forEach((el) => {
          createElement("li", `${el}`, ol);
        });
    });
  }

  function createElement(type, content, parent, cls) {
    const el = document.createElement(type);
    el.textContent = content;
    if (cls) {
      el.className = cls
    }

    if (parent) {
      parent.appendChild(el);
    }

    return el;
  }

  function clearInputs() {
    authorInput.value = "";
    titleInput.value = "";
    categoryInput.value = "";
    contentInput.value = "";
  }
}
