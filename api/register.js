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
    console.log('GET register');
    return 'GET API register';
}

handler._handler.post = (data) => {
    console.log('POST register', data.payload);
    return 'POST API register';
}

handler._handler.put = (data) => {
    console.log('PUT register');
    return 'PUT API register';
}

handler._handler.delete = (data) => {
    console.log('DELETE register');
    return 'DELETE API register';
}

export default handler;