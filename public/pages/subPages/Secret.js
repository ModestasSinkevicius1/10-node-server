import { PageTemplate } from '../../../lib/PageTemplate.js';
import { Home } from '../Home.js';

class Secret extends Home{
    subContentHTML(){
        return `<h3>You found a secret</h3>`;
    }
}


export { Secret }