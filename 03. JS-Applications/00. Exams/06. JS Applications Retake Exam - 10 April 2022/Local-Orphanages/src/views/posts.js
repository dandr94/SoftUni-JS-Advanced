import { html } from "../../node_modules/lit-html/lit-html.js";
import { getOwnPosts } from "../api/main.js";

const ownPostsTemplate = (posts) => html`
  <section id="my-posts-page">
    <h1 class="title">My Posts</h1>

    ${posts.length > 0
      ? html`<div class="my-posts">${posts.map(ownPostTemplate)}</div>`
      : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
  </section>
`;

const ownPostTemplate = (post) => html`
  <div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src=${post.imageUrl} alt="Material Image" />
    <div class="btn-wrapper">
      <a href="/details/${post._id}" class="details-btn btn">Details</a>
    </div>
  </div>
`;

async function postsPage(ctx) {
  const id = ctx.params.id;
  const posts = await getOwnPosts(id);
  ctx.render(ownPostsTemplate(posts));
}

export { postsPage };
