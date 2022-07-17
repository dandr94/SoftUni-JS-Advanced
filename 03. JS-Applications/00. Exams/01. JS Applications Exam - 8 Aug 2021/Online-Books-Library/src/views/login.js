import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../utils.js";
import { login } from '../api/user.js'



const loginPageTemplate = (onSubmit) => html`
<section id="login-page" class="login">
            <form @submit=${onSubmit}id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>
`



export function loginPage(ctx) {
    ctx.render(loginPageTemplate(createSubmitHandler(ctx, onSubmit)))
}


async function onSubmit(ctx, data, event) {
    await login(data.email, data.password)
    event.target.reset()
    ctx.page.redirect('/')
}