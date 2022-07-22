import { html, render } from "../../node_modules/lit-html/lit-html.js";

const navTemplate = (user) => html`
  <h1><a href="/">Orphelp</a></h1>

  <nav>
    <a href="/">Dashboard</a>

    ${user
      ? html`<div id="user">
          <a href="/posts/${user._id}">My Posts</a>
          <a href="/create">Create Post</a>
          <a href="/logout">Logout</a>
        </div>`
      : html`<div id="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}
  </nav>
`;
const header = document.getElementById("header-content");
const root = document.getElementById("main-content");

function ctxRender(content) {
  render(content, root);
}

function addRender(ctx, next) {
  render(navTemplate(ctx.user), header);
  ctx.render = ctxRender;
  next();
}

export { addRender };
