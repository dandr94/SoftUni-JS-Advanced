import { html } from "../../node_modules/lit-html/lit-html.js";
import { editAlbum, getAlbum } from "../api/main.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (album, onSubmit) => html`
  <section class="editPage">
    <form @submit=${onSubmit}>
      <fieldset>
        <legend>Edit Album</legend>

        <div class="container">
          <label for="name" class="vhide">Album name</label>
          <input
            id="name"
            name="name"
            class="name"
            type="text"
            .value=${album.name}
          />

          <label for="imgUrl" class="vhide">Image Url</label>
          <input
            id="imgUrl"
            name="imgUrl"
            class="imgUrl"
            type="text"
            .value=${album.imgUrl}
          />

          <label for="price" class="vhide">Price</label>
          <input
            id="price"
            name="price"
            class="price"
            type="text"
            .value=${album.price}
          />

          <label for="releaseDate" class="vhide">Release date</label>
          <input
            id="releaseDate"
            name="releaseDate"
            class="releaseDate"
            type="text"
            .value=${album.releaseDate}
          />

          <label for="artist" class="vhide">Artist</label>
          <input
            id="artist"
            name="artist"
            class="artist"
            type="text"
            .value=${album.artist}
          />

          <label for="genre" class="vhide">Genre</label>
          <input
            id="genre"
            name="genre"
            class="genre"
            type="text"
            .value=${album.genre}
          />

          <label for="description" class="vhide">Description</label>
          <textarea name="description" class="description" rows="10" cols="10">
${album.description}</textarea
          >

          <button class="edit-album" type="submit">Edit Album</button>
        </div>
      </fieldset>
    </form>
  </section>
`;

async function editPage(ctx) {
  const id = ctx.params.id;
  const album = await getAlbum(id);
  ctx.render(editTemplate(album, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
  const id = ctx.params.id;

  if (Object.values(data).some((v) => v == "")) {
    return alert("All fields are required!");
  }

  await editAlbum(id, {
    name: data.name,
    imgUrl: data.imgUrl,
    price: data.price,
    releaseDate: data.releaseDate,
    artist: data.artist,
    genre: data.genre,
    description: data.description,
  });

  event.target.reset();
  ctx.page.redirect(`/details/${id}`);
}

export { editPage };
