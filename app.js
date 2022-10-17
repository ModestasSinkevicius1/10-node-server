import { server } from "./lib/server.js";

const app = {};

app.PI = 3.14;

app.init = () =>{
    server.init();
}

app.init();

//module.exports = app; //old syntax
export { app }; //new syntaxt