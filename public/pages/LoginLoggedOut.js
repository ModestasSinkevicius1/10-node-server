import { PageTemplate } from '../../lib/PageTemplate.js';

class LoginLoggedOut extends PageTemplate{
    contentHTML(){
        return `<main>
                    <h1>Login</h1>
                    <form>
                        <label>Email</label>
                        <input type="email" required>
                        <label>Password</label>
                        <input type="password" required>
                        <input type="submit" value="Login">
                    </form>
                </main>`;
    }
}


export { LoginLoggedOut }