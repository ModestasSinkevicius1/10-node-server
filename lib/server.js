import http from 'node:http';
import { utils } from './utils.js';

import { Home } from '../public/pages/home.js';
import { About } from '../public/pages/about.js';
import { Services } from '../public/pages/services.js';
import { NotFound } from '../public/pages/NotFound.js';

const server = {};

server.httpServer = http.createServer((req, res) => {

    const URL = req.url;
    const trimmedPath = '';

    const extension = utils.fileExtension(req.url);
    const textFileExtensions = ['css', 'js'];
    const binaryFileExtensions = ['ico', 'png'];
 
    const isTextFile = textFileExtensions.includes(extension);
    const isBinaryFile = binaryFileExtensions.includes(extension);
    const isAPI = req.url.indexOf('/api/') === 0;
    const isPage = !isTextFile && !isBinaryFile && !isAPI;

    if(isTextFile){
        return res.end('TXT request');
    }
    if(isBinaryFile){
        return res.end('BIN request');
    }
    if(isAPI){
        return res.end('API request');
    }
    if(isPage){
        const HTMLHome = new Home();

        const HTMLabout = new About();

        const HTMLservices = new Services();

        const HTML404 = new NotFound();

        let HTML = '';
        switch (req.url) {
            case '/':
                HTML = HTMLHome.getPage();
                break;

            case '/about':
                HTML = HTMLabout.getPage();
                break;

            case '/services':
                HTML = HTMLservices.getPage();
                break;

            default:
                HTML = HTML404.getPage();
                break;
        }

        return res.end(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                        <link rel='stylesheet' href='/public/style/style.css'/>
                    </head>
                    <body>
                        ${HTML}
                    </body>
                </html>`);
    }
    res.end('Something is broken');
});

server.init = () =>{
    const port = 3305;

    server.httpServer.listen(port, () => {
        console.log(`Server is running: http://localhost:${port}`);
    });
}

export { server }