import http from 'node:http';
import { utils } from './utils.js';

import { Home } from '../public/pages/Home.js';
import { About } from '../public/pages/About.js';
import { Services } from '../public/pages/Services.js';
import { NotFound } from '../public/pages/NotFound.js';

const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encryption ? 's' : ''}://${req.headers.host}`;
    const parsedURL = new URL(req.url, baseURL);
    const httpMethod = req.method;

    let trimmedPath = parsedURL.pathname
        .replace(/^\/+|\/+$/g, '')
        .replace(/\/\/+/g, '/');

    const extension = utils.fileExtension(trimmedPath);
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
        let pageClass = NotFound;

        const pageList = {
            '': Home,
            'about': About,
            'services': Services,
        };

        if(pageList[trimmedPath]){
            pageClass = pageList[trimmedPath];
        }

        const HTML = (new pageClass()).render();
        
        return res.end(HTML);
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