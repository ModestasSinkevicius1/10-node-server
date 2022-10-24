import { PageTemplate } from '../../lib/PageTemplate.js';

class Register extends PageTemplate{
    constructor(){
        super();
        this.scripts = ['auth'];
    }
    
    contentHTML(){
        return `<main>
                    <h1>Register</h1>
                    <form>
                        <label>Username</label>
                        <input name="username" type="text">
                        <label>Email</label>
                        <input name="email" type="email">
                        <label>Password</label>
                        <input name="password" type="password">
                        <label>Password repeat</label>
                        <input name="repeatPassword" type="password">
                        <button type="submit">Register</button>
                    </form>
                </main>`;
    }
}


export { Register }