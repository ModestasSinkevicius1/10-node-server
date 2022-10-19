import { PageTemplate } from '../../lib/PageTemplate.js';

class Home extends PageTemplate{
    contentHTML(){
        return `<main>
                    <h1>Home</h1>
                    <h2>Page: Home</h2>
                    <img src="/img/logo.png" alt="Logo">
                    ${this.subContentHTML()}
                </main>`;
    }

    subContentHTML(){
        return `<h3>You're home</h3>`;
    }
}


export { Home }