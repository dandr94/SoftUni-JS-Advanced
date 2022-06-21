const elements = {
  main: document.getElementById("main"),
};

const template = (username, email, age, id) => {
  return `<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${id}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${id}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${id}Username" value="${username}" disabled readonly />
				<div class="user${id}Username">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${id}Email" value="${email}" disabled readonly />
					<label>Age:</label>
					<input type="text" name="user${id}Age" value="${age}" disabled readonly />
				</div>`;
};

const dipslay = (el, value) => (el.style.display = value);

function showInfo(data, id) {
  const div = createElement("div", "", elements.main, "profile");
  div.innerHTML = template(data.username, data.email, data.age, id);
  const button = createElement("button", "Show more", div);
  const hiddenElements = document.getElementsByClassName(
    `user${id}Username`
  )[0];
  hiddenElements.style.display = "none";

  button.addEventListener("click", () => {
    const checked = div.querySelector("input[type=radio]:checked");
    if (checked.value == "unlock") {
      if (button.textContent == "Show more") {
        dipslay(hiddenElements, "block")
        button.textContent = "Hide it";
      } else {
        dipslay(hiddenElements, "none");
        button.textContent = "Show more";
      }
    }
  });
}

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

const returnData = async (url) => {
  const result = await fetch(url);
  return result.json();
};

async function lockedProfile() {
  const data = await returnData(
    "http://localhost:3030/jsonstore/advanced/profiles"
  );
  elements.main.innerHTML = "";

  Object.values(data).forEach((d, i) => showInfo(d, i + 1));
}
