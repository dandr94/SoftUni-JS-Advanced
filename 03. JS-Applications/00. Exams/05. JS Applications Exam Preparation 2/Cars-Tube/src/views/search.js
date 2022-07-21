import { html } from "../../node_modules/lit-html/lit-html.js";
import { searchYear } from "../api/main.js";
import { listingTemplate } from "./listings.js";

const searchTemplate = (listings, onSearch, params = "") => html`
  <section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
      <form @submit=${onSearch}>
        <input
          id="search-input"
          type="text"
          name="search"
          .value=${params}
          placeholder="Enter desired production year"
        />
        <button class="button-list">Search</button>
      </form>
    </div>

    <h2>Results:</h2>
    <div class="listings">
      ${listings.length != 0
        ? listings.map(listingTemplate)
        : html`<p class="no-cars">No results.</p>`}
    </div>
  </section>
`;

async function searchPage(ctx) {
  const params = ctx.querystring.split("=")[1];
  let listings = [];

  if (params) {
    listings = await searchYear(decodeURIComponent(params));
  }

  ctx.render(searchTemplate(listings, onSearch, params));

  function onSearch(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(event.target);
    const search = formData.get("search");

    if (search) {
      ctx.page.redirect("/search?query=" + encodeURIComponent(search));
    }
  }
}

export { searchPage };
