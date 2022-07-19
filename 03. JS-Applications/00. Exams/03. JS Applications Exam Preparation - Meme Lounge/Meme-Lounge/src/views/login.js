import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";
import { notify } from "../notification.js";
import { createSubmitHandler } from "../utils.js";

const loginTemplate = (onSubmit) => html`
  <section id="login">
    <form @submit=${onSubmit} id="login-form">
      <div class="container">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input id="email" placeholder="Enter Email" name="email" type="text" />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          name="password"
        />
        <input type="submit" class="registerbtn button" value="Login" />
        <div class="container signin">
          <p>Dont have an account?<a href="/register">Sign up</a>.</p>
        </div>
      </div>
    </form>
  </section>
`;

function loginPage(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
  if (!data.email || !data.password) {
    return notify("All fields are required!");
  }

  await login(data.email, data.password);
  event.target.reset();
  ctx.page.redirect("/memes");
}

export { loginPage };
