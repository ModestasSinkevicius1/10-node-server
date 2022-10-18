import { PageTemplate } from '../../lib/PageTemplate.js';

class About extends PageTemplate{
    contentHTML(){
        return `<h1>Not home</h1>
                <h2>Page: About</h2>
                <img src="/img/logo.png" alt="Logo">`;
    }
}

export { About }

    