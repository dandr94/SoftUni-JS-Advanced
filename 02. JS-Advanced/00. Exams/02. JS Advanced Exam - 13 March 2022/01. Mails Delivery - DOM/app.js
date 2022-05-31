function solve() {
  const recipientInput = document.getElementById("recipientName");
  const titleInput = document.getElementById("title");
  const messageInput = document.getElementById("message");
  const listOfMails = document.getElementById("list");
  const sentMails = document.getElementsByClassName("sent-list")[0];
  const deletedMails = document.getElementsByClassName('delete-list')[0]

  document.getElementById("add").addEventListener("click", (ev) => {
    if (
      recipientInput.value !== "" &&
      titleInput.value !== "" &&
      messageInput.value !== ""
    ) {
      addToList(ev, recipientInput.value, titleInput.value, messageInput.value);
      clearInputs();
    }
  });

  document.getElementById("reset").addEventListener("click", clearInputs);

  function addToList(ev, recipient, title, message) {
    ev.preventDefault();
    const li = createElement("li");
    createElement("h4", `Title: ${title}`, li);
    createElement("h4", `Recipient Name: ${recipient}`, li);
    createElement("span", `${message}`, li);

    const div = createElement("div", "", li);
    div.setAttribute("id", "list-action");
    let sendBtn = createElement("button", "Send", div);
    let deleteBtn = createElement("button", "Delete", div);
    sendBtn.setAttribute("id", "send");
    deleteBtn.setAttribute("id", "delete");

    listOfMails.appendChild(li);

    sendBtn.addEventListener("click", (ev) =>
      sendMail(ev, recipient, title, message)
    );

    deleteBtn.addEventListener("click", (ev) =>
      deleteMail(ev, recipient, title)
    );
  }

  function sendMail(ev, recipient, title, message) {
    ev.preventDefault();
    ev.target.parentNode.parentNode.remove();

    const li = createElement("li");
    createElement("span", `To: ${recipient}`, li);
    createElement("span", `Title: ${title}`, li);
    const div = createElement("div", "", li);
    div.setAttribute("class", "btn");
    const deleteBtn = createElement("button", "Delete", div);
    deleteBtn.setAttribute("class", "delete");
    sentMails.appendChild(li);

    deleteBtn.addEventListener("click", (ev) =>
      deleteMail(ev, recipient, title)
    );
  }

  function deleteMail(ev, recipient, title) {
    ev.preventDefault();
    ev.target.parentNode.parentNode.remove();

    const li = createElement("li");
    createElement("span", `To: ${recipient}`, li);
    createElement("span", `Title: ${title}`, li);

    deletedMails.appendChild(li)

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
    recipientInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
  }
}
solve();
