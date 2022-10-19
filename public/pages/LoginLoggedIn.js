import { PageTemplate } from '../../lib/PageTemplate.js';

class LoginLoggedIn extends PageTemplate{
    contentHTML(){
        return `<main>
                    <h1>Login</h1>
                    <p>You are already logged in if you wan't to logged press here <<ENTER>></p>
                </main>`;
    }
}


export { LoginLoggedIn }