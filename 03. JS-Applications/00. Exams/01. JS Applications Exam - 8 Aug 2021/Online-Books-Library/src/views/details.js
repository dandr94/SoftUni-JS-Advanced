import { html } from "../../node_modules/lit-html/lit-html.js";
import { getBook, deleteBook, getLikes, getMyLike, addLike } from "../api/books.js";




const detailsTemplate = (book, onDelete, user, likes, hasLike, onLike) => html`
  <section id="details-page" class="details">
    <div class="book-information">
      <h3>${book.title}</h3>
      <p class="type">Type: ${book.type}</p>
      <p class="img"><img src="${book.imageUrl}" /></p>
      <div class="actions">
        ${bookOwnerButtonsTemplate(book, book.isOwner, onDelete )}

        ${likeTemplate(book.isOwner, hasLike, user, onLike)}

        <div class="likes">
          <img class="hearts" src="/images/heart.png" />
          <span id="total-likes">Likes: ${likes}</span>
        </div>
      </div>
    </div>
    <div class="book-description">
      <h3>Description:</h3>
      <p>
        ${book.description}
      </p>
    </div>
  </section>
`;

const bookOwnerButtonsTemplate = (book, isOwner, onDelete) => {
  if (isOwner) {
    return html`<a class="button" href="/edit/${book._id}">Edit</a>
    <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
  } else {
    return null
  }
}


const likeTemplate = (isOwner, hasLike, user, onLike) => {
  if (isOwner || hasLike || !user) {
    return null
  } else {
    return html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
  }
}

export async function detailsPage(ctx) {
    const id = ctx.params.id

    const [book, likes, hasLike] = await Promise.all([
      getBook(id),
      getLikes(id),
      ctx.user ? getMyLike(id, ctx.user._id) : 0
    ])


    if (ctx.user) {
        book.isOwner = ctx.user._id == book._ownerId
    }

    ctx.render(detailsTemplate(book, onDelete, ctx.user, likes, hasLike, onLike))


    async function onLike() {
      await addLike({
        bookId: id
      })
      ctx.page.redirect(`/details/${id}`)
    }



    async function onDelete() {
        const choice = confirm('Are you sure?')
        if (choice) {
            await deleteBook(id)
            ctx.page.redirect('/')
        }
    }
}