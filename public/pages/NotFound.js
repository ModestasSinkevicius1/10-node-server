import { PageTemplate } from "../../lib/PageTemplate.js";

class NotFound extends PageTemplate{
    contentHTML(){
        return `<h1>404 code</h1>`
    }
}


export { NotFound }