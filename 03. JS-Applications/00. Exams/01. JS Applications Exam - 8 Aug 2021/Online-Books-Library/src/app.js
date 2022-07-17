import page from '../node_modules/page/page.mjs'
import { addRender } from './middlewares/render.js'
import {addSession} from './middlewares/seasion.js'
import { dashboardPage } from './views/dashboard.js'
import { loginPage } from './views/login.js'
import { logout } from './api/user.js'
import { registerPage } from './views/register.js'
import { detailsPage } from './views/details.js'
import { editPage } from './views/edit.js'
import { addPage } from './views/add.js'
import { myBooksPage } from './views/myBooks.js'



page(addSession)
page(addRender)


page('/', dashboardPage)
page('/login', loginPage)
page('/logout', onLogout)
page('/register', registerPage)
page('/add', addPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/myBooks/:id', myBooksPage)

page.start()


function onLogout(ctx) {
    logout()
    ctx.page.redirect('/')
}