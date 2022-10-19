import { Home } from '../public/pages/Home.js';
import { About } from '../public/pages/About.js';
import { Services } from '../public/pages/Services.js';
import { NotFound } from '../public/pages/NotFound.js';
import { LoginLoggedIn } from '../public/pages/LoginLoggedIn.js';
import { LoginLoggedOut } from '../public/pages/LoginLoggedOut.js';
import { Logout } from '../public/pages/Logout.js';
import { Register } from '../public/pages/Register.js';
import { Account } from '../public/pages/Account.js';
import { AccountDeny } from '../public/pages/AccountDeny.js';
import { Secret } from '../public/pages/subPages/Secret.js';

const baseRoutes = {
    '': Home,
    'home': Home,
    '404': NotFound,
    'about': About,
    'services': Services,
    'home/secret': Secret,
};

const authRoutes = {
    'login': LoginLoggedOut,
    'register': Register,
    'account': AccountDeny,
};

const accountRoutes = {
    'login': LoginLoggedIn,
    'logout': Logout,
    'account': Account,
}

const publicRoutes = {...baseRoutes, ...authRoutes};
const userRoutes = {...baseRoutes, ...accountRoutes};

export { publicRoutes, userRoutes }