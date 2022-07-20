import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteAlbum, getAlbum } from "../api/main.js";

const detailsTemplate = (album, onDelete) => html`
  <section id="detailsPage">
    <div class="wrapper">
      <div class="albumCover">
        <img src=${album.imgUrl} />
      </div>
      <div class="albumInfo">
        <div class="albumText">
          <h1>Name: ${album.name}</h1>
          <h3>Artist: ${album.artist}</h3>
          <h4>Genre: ${album.genre}</h4>
          <h4>Price: $${album.price}</h4>
          <h4>Date: ${album.releaseDate}</h4>
          <p>${album.description}</p>
        </div>

        ${album.isOwner
          ? html`<div class="actionBtn">
              <a href="/edit/${album._id}" class="edit">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" class="remove"
                >Delete</a
              >
            </div>`
          : nothing}
      </div>
    </div>
  </section>
`;

async function detailsPage(ctx) {
  const id = ctx.params.id;
  const album = await getAlbum(id);

  if (ctx.user) {
    album.isOwner = ctx.user._id == album._ownerId;
  }

  ctx.render(detailsTemplate(album, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure?");
    if (choice) {
      await deleteAlbum(id);
      ctx.page.redirect("/catalog");
    }
  }
}

export { detailsPage };
