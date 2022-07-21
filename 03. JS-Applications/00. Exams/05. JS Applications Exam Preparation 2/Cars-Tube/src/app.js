import page from "../node_modules/page/page.mjs";
import { logout } from "./api/user.js";
import { addRender } from "./middlewares/render.js";
import { addSession } from "./middlewares/seasion.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { listingsPage } from "./views/listings.js";
import { loginPage } from "./views/login.js";
import { myListingsPage } from "./views/myListings.js";
import { registerPage } from "./views/register.js";
import { searchPage } from "./views/search.js";

page(addSession);
page(addRender);

page("/", homePage);
page("/listings", listingsPage);
page("/login", loginPage);
page("/register", registerPage);
page("/logout", onLogout);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/myListings/:id", myListingsPage);
page("/search", searchPage);

page.start();

function onLogout(ctx) {
  logout();
  ctx.page.redirect("/");
}
