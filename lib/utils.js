import crypto from 'node:crypto';

const utils = {};

utils.fileExtension = (url) => {
    const urlStart = url.split('?')[0].split('.');
    return urlStart[url.split('.').length-1];
}

utils.parseJsonToObject = (str) => {
    try {
        return JSON.parse(str);
    } 
    catch (error) {
        return {};
    }
}

utils.hash = (str) => {
    try{
        const hash = crypto.createHash('sha512').update(str).digest('hex');
        return [false, hash];
    }
    catch(error){
        return [true, error];
    }
}

export { utils };