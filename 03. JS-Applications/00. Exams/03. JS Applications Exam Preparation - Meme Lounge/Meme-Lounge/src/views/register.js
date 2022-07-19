import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";
import { notify } from "../notification.js";
import { createSubmitHandler } from "../utils.js";

const registerTemplate = (onSubmit) => html`
  <section id="register">
    <form @submit=${onSubmit} id="register-form">
      <div class="container">
        <h1>Register</h1>
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter Username"
          name="username"
        />
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Enter Email" name="email" />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          name="password"
        />
        <label for="repeatPass">Repeat Password</label>
        <input
          id="repeatPass"
          type="password"
          placeholder="Repeat Password"
          name="repeatPass"
        />
        <div class="gender">
          <input type="radio" name="gender" id="female" value="female" />
          <label for="female">Female</label>
          <input type="radio" name="gender" id="male" value="male" checked />
          <label for="male">Male</label>
        </div>
        <input type="submit" class="registerbtn button" value="Register" />
        <div class="container signin">
          <p>Already have an account?<a href="/login">Sign in</a>.</p>
        </div>
      </div>
    </form>
  </section>
`;

function registerPage(ctx) {
  ctx.render(registerTemplate(createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
  if (!data.email || !data.password || !data.username) {
    return notify("All fields are required!");
  }

  if (data.password != data["repeatPass"]) {
    return notify("Password does not match!");
  }

  await register(data.username, data.email, data.password, data.gender);
  event.target.reset();
  ctx.page.redirect("/memes");
}

export { registerPage };
