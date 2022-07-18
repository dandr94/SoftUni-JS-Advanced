import { html } from "../../node_modules/lit-html/lit-html.js";
import { postComment } from "../api/comments.js";
import { createSubmitHandler } from "../utils.js";

const formTemplate = (onSubmit) => html`
  <article class="create-comment">
    <label>Add new comment:</label>
    <form @submit=${onSubmit} class="form">
      <textarea name="comment" placeholder="Comment......"></textarea>
      <input class="btn submit" type="submit" value="Add Comment" />
    </form>
  </article>
`;
function commentFormView(ctx, game) {
  if (ctx.user && !game.isOwner) {
    return formTemplate(createSubmitHandler(ctx, onSubmit));
  } else {
    return null;
  }
}

async function onSubmit(ctx, data, event) {
  const id = ctx.params.id;

  await postComment({
    gameId: id,
    comment: data.comment,
  });

  event.target.reset();
  ctx.page.redirect(`/details/${id}`);
}

export { commentFormView };
