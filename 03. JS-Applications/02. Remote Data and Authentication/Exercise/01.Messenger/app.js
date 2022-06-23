const url = `http://localhost:3030/jsonstore/messenger`;

const elements = {
  submitBtn: document.getElementById("submit"),
  refreshBtn: document.getElementById("refresh"),
  msgArea: document.getElementById("messages"),
};

const returnData = async (url) => {
  const result = await fetch(url);
  return result.json();
};

async function loadMsgs(url) {
  const data = await returnData(url);
  elements.msgArea.value = Object.values(data)
    .map((x) => `${x.author}: ${x.content}`)
    .join("\n");
}

async function submitMsg(url) {
  const author = document.querySelector('input[name="author"]');
  const content = document.querySelector('input[name="content"]');

  if (author.value !== "" || content.value !== "") {
    const data = { author: author.value, content: content.value };
    const option = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    author.value = "";
    content.value = "";

    await fetch(url, option);
  }
}

function attachEvents() {
  elements.refreshBtn.addEventListener("click", () => {
    loadMsgs(url);
  });

  elements.submitBtn.addEventListener("click", () => {
    submitMsg(url);
  });
}

attachEvents();
