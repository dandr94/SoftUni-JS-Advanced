import page from "../node_modules/page/page.mjs";
import { addRender } from "./middlewares/render.js";
import { homePage } from "./views/home.js";
import { catalogPage } from "./views/catalog.js";
import { logingPage } from "./views/login.js";
import { registergPage } from "./views/register.js";
import { createPage } from "./views/create.js";
import { editPage } from "./views/edit.js";
import { detailsPage } from "./views/details.js";
import { logout } from "./api/user.js";
import { addSession } from "./middlewares/session.js";

page(addSession);
page(addRender);

page("/", homePage);
page("/catalog", catalogPage);
page("/login", logingPage);
page("/register", registergPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/logout", onLogout);

page.start();

function onLogout(ctx) {
  logout();
  ctx.page.redirect("/");
}
