import { html } from "../../node_modules/lit-html/lit-html.js";
import { createListing } from "../api/main.js";
import { createSubmitHandler } from "../utils.js";

const createTemplate = (onSubmit) => html`
  <section id="create-listing">
    <div class="container">
      <form @submit=${onSubmit} id="create-form">
        <h1>Create Car Listing</h1>
        <p>Please fill in this form to create an listing.</p>
        <hr />

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand" />

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model" />

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description" />

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year" />

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl" />

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price" />

        <hr />
        <input type="submit" class="registerbtn" value="Create Listing" />
      </form>
    </div>
  </section>
`;

function createPage(ctx) {
  ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
  if (Object.values(data).some((v) => v == "")) {
    return alert("All fields are required");
  }

  if (data.price < 0 || data.year < 0) {
    return alert("Values must be possitive!");
  }

  await createListing({
    brand: data.brand,
    model: data.model,
    description: data.description,
    year: Number(data.year),
    imageUrl: data.imageUrl,
    price: Number(data.price),
  });

  event.target.reset();
  ctx.page.redirect("/listings");
}

export { createPage };
