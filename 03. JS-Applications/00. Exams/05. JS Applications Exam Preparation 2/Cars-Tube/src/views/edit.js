import { html } from "../../node_modules/lit-html/lit-html.js";
import { editListing, getListing } from "../api/main.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (listing, onSubmit) => html`
  <section id="edit-listing">
    <div class="container">
      <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Car Listing</h1>
        <p>Please fill in this form to edit an listing.</p>
        <hr />

        <p>Car Brand</p>
        <input
          type="text"
          placeholder="Enter Car Brand"
          name="brand"
          .value=${listing.brand}
        />

        <p>Car Model</p>
        <input
          type="text"
          placeholder="Enter Car Model"
          name="model"
          .value=${listing.model}
        />

        <p>Description</p>
        <input
          type="text"
          placeholder="Enter Description"
          name="description"
          .value=${listing.description}
        />

        <p>Car Year</p>
        <input
          type="number"
          placeholder="Enter Car Year"
          name="year"
          .value=${listing.year}
        />

        <p>Car Image</p>
        <input
          type="text"
          placeholder="Enter Car Image"
          name="imageUrl"
          .value=${listing.imageUrl}
        />

        <p>Car Price</p>
        <input
          type="number"
          placeholder="Enter Car Price"
          name="price"
          .value=${listing.price}
        />

        <hr />
        <input type="submit" class="registerbtn" value="Edit Listing" />
      </form>
    </div>
  </section>
`;

async function editPage(ctx) {
  const id = ctx.params.id;
  const listing = await getListing(id);

  ctx.render(editTemplate(listing, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
  const id = ctx.params.id;
  if (Object.values(data).some((v) => v == "")) {
    return alert("All fields are required!");
  }

  if (data.price < 0 || data.year < 0) {
    return alert("Values must be possitive!");
  }

  await editListing(id, {
    brand: data.brand,
    model: data.model,
    description: data.description,
    year: Number(data.year),
    imageUrl: data.imageUrl,
    price: Number(data.price),
  });

  event.target.reset();
  ctx.page.redirect(`/details/${id}`);
}

export { editPage };
