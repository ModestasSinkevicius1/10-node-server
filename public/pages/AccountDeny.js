import { PageTemplate } from '../../lib/PageTemplate.js';

class AccountDeny extends PageTemplate{
    contentHTML(){
        return `<main>
                    <h1>You can't access acount when logged out</h1>
                    <h2>Page: Account</h2>
                </main>`;
    }
}


export { AccountDeny }