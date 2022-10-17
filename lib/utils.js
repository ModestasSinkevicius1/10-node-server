const utils = {};

utils.fileExtension = (url) => {


    const urlStart = url.split('.');
    return urlStart[url.split('.').length-1];
}

export { utils };