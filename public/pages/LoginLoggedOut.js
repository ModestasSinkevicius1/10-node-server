import { PageTemplate } from '../../lib/PageTemplate.js';

class LoginLoggedOut extends PageTemplate{
    
    constructor(){
        super();
        this.scripts = ['auth'];
    }
    
    contentHTML(){
        return `<main>
                    <h1>Login</h1>
                    <form action="/api/user-login" method="POST">
                        <label>Email</label>
                        <input name="email" type="email">
                        <label>Password</label>
                        <input name="password" type="password">
                        <button type="submit">Login</button>
                    </form>
                </main>`;
    }
}


export { LoginLoggedOut }