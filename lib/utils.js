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

export { utils };