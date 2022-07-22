import { html } from "../../node_modules/lit-html/lit-html.js";
import { editPost, getPost } from "../api/main.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (post, onSubmit) => html`
  <section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
      <h1 class="title">Edit Post</h1>

      <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" name="title" id="title" .value=${post.title} />
      </article>

      <article class="input-group">
        <label for="description">Description of the needs </label>
        <input
          type="text"
          name="description"
          id="description"
          .value=${post.description}
        />
      </article>

      <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          .value=${post.imageUrl}
        />
      </article>

      <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address" .value=${post.address} />
      </article>

      <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone" .value=${post.phone} />
      </article>

      <input type="submit" class="btn submit" value="Edit Post" />
    </form>
  </section>
`;

async function editPage(ctx) {
  const id = ctx.params.id;
  const post = await getPost(id);

  ctx.render(editTemplate(post, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
  const id = ctx.params.id;
  if (Object.values(data).some((v) => v == "")) {
    return alert("All fields are required!");
  }

  await editPost(id, {
    title: data.title,
    description: data.description,
    imageUrl: data.imageUrl,
    address: data.address,
    phone: data.phone,
  });

  event.target.reset();
  ctx.page.redirect(`/details/${id}`);
}

export { editPage };
