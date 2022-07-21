import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteListing, getListing } from "../api/main.js";

const detailsTemplate = (listing, onDelete) => html`
  <section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
      <img src=${listing.imageUrl} />
      <hr />
      <ul class="listing-props">
        <li><span>Brand:</span>${listing.brand}</li>
        <li><span>Model:</span>${listing.model}</li>
        <li><span>Year:</span>${listing.year}</li>
        <li><span>Price:</span>${listing.price}$</li>
      </ul>

      <p class="description-para">${listing.description}</p>

      ${listing.isOwner
        ? html`<div class="listings-buttons">
            <a href="/edit/${listing._id}" class="button-list">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button-list"
              >Delete</a
            >
          </div>`
        : nothing}
    </div>
  </section>
`;

async function detailsPage(ctx) {
  const id = ctx.params.id;
  const listing = await getListing(id);

  if (ctx.user) {
    listing.isOwner = ctx.user._id == listing._ownerId;
  }

  ctx.render(detailsTemplate(listing, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure?");

    if (choice) {
      await deleteListing(id);
      ctx.page.redirect("/listings");
    }
  }
}

export { detailsPage };
