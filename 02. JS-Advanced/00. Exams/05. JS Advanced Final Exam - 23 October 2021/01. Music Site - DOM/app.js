window.addEventListener("load", solve);

function solve() {
  const genreInput = document.getElementById("genre");
  const songNameInput = document.getElementById("name");
  const songAuthorInput = document.getElementById("author");
  const dateOfCreation = document.getElementById("date");
  const allHits = document.getElementsByClassName("all-hits-container")[0];
  const totalLikes = document.querySelector("#total-likes .likes p");
  const savedHits = document.getElementsByClassName("saved-container")[0];
  let count = 0

  document.getElementById("add-btn").addEventListener("click", (ev) => {
    if (
      genreInput.value !== "" &&
      songNameInput.value !== "" &&
      songAuthorInput.value !== "" &&
      dateOfCreation.value !== ""
    ) {
      addSong(
        ev,
        genreInput.value,
        songNameInput.value,
        songAuthorInput.value,
        dateOfCreation.value
      );
      clearInputs();
    }
  });

  function addSong(ev, genre, songName, author, date) {
    ev.preventDefault();
    const div = createElement("div");
    div.setAttribute("class", "hits-info");
    let img = createElement("img", "", div);
    img.src = "./static/img/img.png";
    createElement("h2", `Genre: ${genre}`, div);
    createElement("h2", `Name: ${songName}`, div);
    createElement("h2", `Author: ${author}`, div);
    createElement("h3", `Date: ${date}`, div);
    let saveBtn = createElement("button", "Save song", div);
    saveBtn.setAttribute("class", "save-btn");
    let likeBtn = createElement("button", "Like song", div);
    likeBtn.setAttribute("class", "like-btn");
    let deleteBtn = createElement("button", "Delete", div);
    deleteBtn.setAttribute("class", "delete-btn");

    allHits.appendChild(div);

    saveBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
      const el = ev.target.parentNode
      ev.target.parentNode.remove()
      el.removeChild(saveBtn)
      el.removeChild(likeBtn)
      savedHits.appendChild(el)
    });
    likeBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
        count += 1
      totalLikes.textContent = `Total Likes: ${count}`;
      likeBtn.disabled = true;
    });

    deleteBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.remove()
    })
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
    genreInput.value = "";
    songNameInput.value = "";
    songAuthorInput.value = "";
    dateOfCreation.value = "";
  }
}
