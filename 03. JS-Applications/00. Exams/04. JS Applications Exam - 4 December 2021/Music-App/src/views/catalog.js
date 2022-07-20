import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getCatalog } from "../api/main.js";

const catalogTemplate = (catalog, user) => html`
  <section id="catalogPage">
    <h1>All Albums</h1>

    ${catalog.length > 0
      ? catalog.map((x) => albumTemplate(x, user))
      : html`<p>No Albums in Catalog!</p>`}
  </section>
`;

export const albumTemplate = (album, user) => html`
  <div class="card-box">
    <img src=${album.imgUrl} />
    <div>
      <div class="text-center">
        <p class="name">Name: ${album.name}</p>
        <p class="artist">Artist: ${album.artist}</p>
        <p class="genre">Genre: ${album.genre}</p>
        <p class="price">Price: $${album.price}</p>
        <p class="date">Release Date: ${album.releaseDate}</p>
      </div>
      <div class="btn-group">
        ${user
          ? html` <a href="/details/${album._id}" id="details">Details</a>`
          : nothing}
      </div>
    </div>
  </div>
`;

async function catalogPage(ctx) {
  const catalog = await getCatalog();
  const user = ctx.user;
  ctx.render(catalogTemplate(catalog, user));
}

export { catalogPage };
