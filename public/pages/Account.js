import { PageTemplate } from '../../lib/PageTemplate.js';

class Account extends PageTemplate{
    contentHTML(){
        return `<main>
                    <h1>My account</h1>
                    <h2>Page: Account</h2>
                </main>`;
    }
}


export { Account }