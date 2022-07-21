import { html } from "../../node_modules/lit-html/lit-html.js";
import { getOwnListings } from "../api/main.js";
import { listingTemplate } from "./listings.js";

const myListingsTempalte = (listings) => html`
  <section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
      ${listings.length > 0
        ? listings.map(listingTemplate)
        : html`<p class="no-cars">You haven't listed any cars yet.</p>`}
    </div>
  </section>
`;

async function myListingsPage(ctx) {
  const id = ctx.params.id;
  const listings = await getOwnListings(id);
  ctx.render(myListingsTempalte(listings));
}

export { myListingsPage };
