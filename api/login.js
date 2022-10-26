const handler = {};

handler.init = (data, callback) => {
    const allowrdMethods = ['get', 'post', 'put', 'delete'];
    if(allowrdMethods.includes(data.httpMethod)) {
        handler._handler[data.httpMethod](data);
    }
    return 'Received http method is forbiden';
}

handler._handler = {};

handler._handler.get = (data) => {
    console.log('GET login');
    return 'GET API login';
}

handler._handler.post = (data) => {
    console.log('POST login', data.payload);
    return 'GET POST login';
}

handler._handler.put = (data) => {
    console.log('PUT login');
    return 'GET PUT login';
}

handler._handler.delete = (data) => {
    console.log('DELETE login');
    return 'GET DELETE login';
}

export default handler;