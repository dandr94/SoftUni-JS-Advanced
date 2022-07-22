import { html } from "../../node_modules/lit-html/lit-html.js";
import {
  deletePost,
  getDonations,
  getOwnDonation,
  getPost,
  makeDonation,
} from "../api/main.js";

const detailsTemplate = (
  post,
  onDelete,
  user,
  donations,
  donated,
  onDonate
) => html`
  <section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
      <div id="details">
        <div class="image-wrapper">
          <img src=${post.imageUrl} alt="Material Image" class="post-image" />
        </div>
        <div class="info">
          <h2 class="title post-title">${post.title}</h2>
          <p class="post-description">Description: ${post.description}</p>
          <p class="post-address">Address: ${post.address}</p>
          <p class="post-number">Phone number: ${post.phone}</p>
          <p class="donate-Item">Donate Materials: ${donations}</p>

          <div class="btns">
            ${buttonsControlsTemplate(post, onDelete)}
            ${donateTemplate(post.isOwner, user, donated, onDonate)}
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const buttonsControlsTemplate = (post, onDelete) => {
  if (post.isOwner) {
    return html`<a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
      <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn"
        >Delete</a
      >`;
  } else {
    null;
  }
};

const donateTemplate = (isOwner, user, donated, onDonate) => {
  if (isOwner || donated || !user) {
    return null;
  } else {
    return html`<a
      @click=${onDonate}
      href="javascript:void(0)"
      class="donate-btn btn"
      >Donate</a
    >`;
  }
};

async function detailsPage(ctx) {
  const id = ctx.params.id;

  const [post, donations, donated] = await Promise.all([
    getPost(id),
    getDonations(id),
    ctx.user ? getOwnDonation(id, ctx.user._id) : 0,
  ]);

  if (ctx.user) {
    post.isOwner = ctx.user._id == post._ownerId;
  }

  ctx.render(
    detailsTemplate(post, onDelete, ctx.user, donations, donated, onDonate)
  );

  async function onDonate() {
    await makeDonation({ id });

    ctx.page.redirect(`/details/${id}`);
  }

  async function onDelete() {
    const choice = confirm("Are you sure?");

    if (choice) {
      await deletePost(id);
      ctx.page.redirect("/");
    }
  }
}

export { detailsPage };
