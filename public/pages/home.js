import { PageTemplate } from '../../lib/PageTemplate.js';

class Home extends PageTemplate{
    contentHTML(){
        return `<main>
                    <h1>Home</h1>
                    <h2>Page: Home</h2>
                    <img src="/img/logo.png" alt="Logo">
                </main>`;
    }
}


export { Home }