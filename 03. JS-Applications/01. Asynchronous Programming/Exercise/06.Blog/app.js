const elements = {
  btnLoadPosts: document.getElementById("btnLoadPosts"),
  btnViewPost: document.getElementById("btnViewPost"),
  posts: document.getElementById("posts"),
  postTitle: document.getElementById("post-title"),
  postBody: document.getElementById("post-body"),
  postComments: document.getElementById("post-comments"),
};

const posts = {};

function createElement(type, content, parent, value) {
  const el = document.createElement(type);
  el.textContent = content;
  if (value) {
    el.value = value;
  }

  if (parent) {
    parent.appendChild(el);
  }

  return el;
}
const returnData = async (suffix) => {
  const result = await fetch(`http://localhost:3030/jsonstore/blog/${suffix}`);
  return result.json();
};

async function viewPost() {
  const data = await returnData("comments");
  const selectedPost = elements.posts.options[elements.posts.selectedIndex];
  const post = posts[selectedPost.value];
  elements.postComments.innerHTML = "";
  Object.values(data).forEach((el) => {
    if (el.postId == selectedPost.value) {
      createElement("li", `${el.text}`, elements.postComments);
    }
  });

  elements.postTitle.textContent = post.title;
  elements.postBody.textContent = post.body;
}

async function loadPosts() {
  const data = await returnData("posts");
  elements.posts.innerHTML = "";

  Object.values(data).forEach((el) => {
    createElement("option", `${el.title}`, elements.posts, el.id);

    if (!posts.hasOwnProperty(el.id)) {
      posts[el.id] = el;
    }
  });
}

function attachEvents() {}
elements.btnViewPost.addEventListener("click", (ev) => {
  viewPost();
});

elements.btnLoadPosts.addEventListener("click", (ev) => {
  loadPosts();
});
attachEvents();
