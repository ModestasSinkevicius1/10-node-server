import { PageTemplate } from '../../lib/PageTemplate.js';

class Register extends PageTemplate{
    contentHTML(){
        return `<main>
                    <h1>Register</h1>
                    <form>
                        <label>Email</label>
                        <input type="email" required>
                        <label>Password</label>
                        <input type="password" required>
                        <label>Password repeat</label>
                        <input type="password" required>
                        <input type="submit" value="Register">
                    </form>
                </main>`;
    }
}


export { Register }