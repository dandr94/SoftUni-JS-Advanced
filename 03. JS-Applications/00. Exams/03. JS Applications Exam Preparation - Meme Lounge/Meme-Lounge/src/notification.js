const el = document.getElementById("errorBox");
const span = el.querySelector("span");

function notify(msg) {
  span.textContent = msg;
  el.style.display = "block";

  setTimeout(() => (el.style.display = "none"), 3000);
}

export { notify };
