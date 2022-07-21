import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";
import { createSubmitHandler } from "../utils.js";

const loginTemplate = (onSubmit) => html`
  <section id="login">
    <div class="container">
      <form @submit=${onSubmit} id="login-form" action="#" method="post">
        <h1>Login</h1>
        <p>Please enter your credentials.</p>
        <hr />

        <p>Username</p>
        <input placeholder="Enter Username" name="username" type="text" />

        <p>Password</p>
        <input type="password" placeholder="Enter Password" name="password" />
        <input type="submit" class="registerbtn" value="Login" />
      </form>
      <div class="signin">
        <p>Dont have an account? <a href="/register">Sign up</a>.</p>
      </div>
    </div>
  </section>
`;

function loginPage(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
  if (!data.username || !data.password) {
    return alert("All fields are required!");
  }

  await login(data.username, data.password);
  event.target.reset();
  ctx.page.redirect("/listings");
}

export { loginPage };
