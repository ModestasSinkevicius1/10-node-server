import { PageTemplate } from '../../lib/PageTemplate.js';

class Logout extends PageTemplate{
    contentHTML(){
        return `<main>
                    <p>You are logged out</p>
                </main>`;
    }
}


export { Logout }