import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteMeme, getMeme } from "../api/main.js";

const detailsTemplate = (meme, onDelete) => html`
  <section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
      <div class="meme-img">
        <img alt="meme-alt" src=${meme.imageUrl} />
      </div>
      <div class="meme-description">
        <h2>Meme Description</h2>
        <p>${meme.description}</p>

        ${meme.isOwner
          ? html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
              <button @click=${onDelete} class="button danger">Delete</button>`
          : nothing}
      </div>
    </div>
  </section>
`;

async function detailsPage(ctx) {
  const id = ctx.params.id;
  const meme = await getMeme(id);

  if (ctx.user) {
    meme.isOwner = ctx.user._id == meme._ownerId;
  }

  ctx.render(detailsTemplate(meme, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure?");

    if (choice) {
      await deleteMeme(id);
      ctx.page.redirect("/memes");
    }
  }
}

export { detailsPage };
