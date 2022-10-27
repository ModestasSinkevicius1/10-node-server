import { PageTemplate } from '../../lib/PageTemplate.js';

class Register extends PageTemplate{
    constructor(){
        super();
        this.scripts = ['auth'];
    }
    
    contentHTML(){
        return `<main>
                    <h1>Register</h1>
                    <form action="/api/register" data-method="post">
                        <label>Username</label>
                        <input name="username" data-validation="username" type="text">
                        <label>Email</label>
                        <input name="email" data-validation="email" type="email">
                        <label>Password</label>
                        <input name="password" data-validation="password" type="password">
                        <label>Password repeat</label>
                        <input name="repeatPassword" data-validation="password" type="password">
                        <button type="submit">Register</button>
                    </form>
                </main>`;
    }
}


export { Register }