import { html } from "../../node_modules/lit-html/lit-html.js";
import { searchYear } from "../api/main.js";
import { albumTemplate } from "./catalog.js";

const searchTemplate = (albums, onSearch, params = "", user) => html`

        <section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <form @submit=${onSearch}>
                <input id="search-input" type="text" name="search" .value=${params} placeholder="Enter desired albums's name">
                <button class="button-list">Search</button>
                </form>
            </div>

            <h2>Results:</h2>


            ${
              albums.length != 0
                ? albums.map((x) => albumTemplate(x, user))
                : html`<p class="no-result">No result.</p>`
            }
            <
                
            </div>
        </section>
`;

async function searchPage(ctx) {
  const params = ctx.querystring.split("=")[1];
  let albums = [];

  if (params) {
    albums = await searchYear(decodeURIComponent(params));
  }

  ctx.render(searchTemplate(albums, onSearch, params, ctx.user));

  function onSearch(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const search = formData.get("search");

    if (search) {
      ctx.page.redirect("/search?query=" + encodeURIComponent(search));
    }
  }
}

export { searchPage };
