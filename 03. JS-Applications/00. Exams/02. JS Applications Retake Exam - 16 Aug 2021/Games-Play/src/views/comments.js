import { getByGameId } from "../api/comments.js";
import { html } from "../../node_modules/lit-html/lit-html.js";

const commentsTemplate = (comments) => html`
  <div class="details-comments">
    <h2>Comments:</h2>
    ${comments.length > 0
      ? commentList(comments)
      : html`<p class="no-comment">No comments.</p>`}
  </div>
`;

const commentList = (comments) => html`
  <ul>
    ${comments.map(commentTemplate)}
  </ul>
`;

const commentTemplate = (comment) => html` <li class="comment">
  <p>Content: ${comment.comment}.</p>
</li>`;

async function commentsView(id) {
  const comments = await getByGameId(id);

  return commentsTemplate(comments);
}

export { commentsView };
