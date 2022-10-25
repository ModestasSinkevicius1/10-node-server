import http from 'node:http';
import { publicRoutes, userRoutes } from './routes.js';
import { utils } from './utils.js';
import { file } from './file.js';

const server = {};

server.httpServer = http.createServer(async (req, res) => {
    const baseURL = `http${req.socket.encryption ? 's' : ''}://${req.headers.host}`;
    const parsedURL = new URL(req.url, baseURL);
    const httpMethod = req.method;

    let trimmedPath = parsedURL.pathname
        .replace(/^\/+|\/+$/g, '')
        .replace(/\/\/+/g, '/');

    const MIMES = {
        html: 'text/html',
        css: 'text/css',
        js: 'text/javascript',
        txt: 'text/plain',
    }

    const extension = utils.fileExtension(trimmedPath);
    const textFileExtensions = ['css', 'js', 'txt', 'svg'];
    const binaryFileExtensions = ['ico', 'png', 'jpg', 'jpeg'];
 
    const isTextFile = textFileExtensions.includes(extension);
    const isBinaryFile = binaryFileExtensions.includes(extension);
    const isAPI = trimmedPath.indexOf('api/') === 0;
    const isPage = !isTextFile && !isBinaryFile && !isAPI;

    if(isTextFile){
        let [fileError, fileContent] = await file.readPublic(trimmedPath);
        res.writeHead(fileError ? 404 : 200, {
            'Content-type': MIMES[extension],
            'cache-control': 'max-age=0',
        });
        return res.end(fileError ? 'Your requested file does not exist...' : fileContent);
    }
    if(isBinaryFile){
        return res.end('BIN request');
    }

    if(isAPI){
        console.log(apiRoute);
        // http method: get, create, update, delete, ...
        // content: {}, ...
        // API assign

        return res.end('API request');
    }
    if(isPage){
        const isUserLoggedIn = false;
        const routes = isUserLoggedIn ? userRoutes : publicRoutes;

        let pageClass = routes['404'];

        if(routes[trimmedPath]){
            pageClass = routes[trimmedPath];
        }

        const HTML = (new pageClass()).render();
        
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
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