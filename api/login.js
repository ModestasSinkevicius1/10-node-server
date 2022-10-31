import { file } from '../lib/file.js';
import { IsValid } from '../lib/IsValid.js';
import { utils } from '../lib/utils.js';

const handler = {};

handler.init = async (data, callback) => {
    const allowrdMethods = ['get', 'post', 'put', 'delete'];
    if(allowrdMethods.includes(data.httpMethod)) {
        return await handler._handler[data.httpMethod](data);
    }
    return 'Received http method is forbiden';
}

handler._handler = {};

handler._handler.get = (data) => {
    console.log('GET login');
    return 'GET API login';
}

handler._handler.post = async (data) => {
    const { payload } = data;
    const { email, password } = payload;

    const [errEmail, msgEmail] = IsValid.email(email);
    if(errEmail) {
        return msgEmail;
    }

    const [errPassword, msgPassword] =
    IsValid.password(password);

    if(errPassword) {
        return msgPassword;
    }

    const salt = 'f323kht32';
    const [hashErr, hashMsg] = utils.hash(password + salt);

    if(hashErr){
        return 'Failed to login';
    }

    payload.password = hashMsg;

    const [readErr, readMsg] = await file.read('users', email + '.json');

    if(readErr){
        return 'Incorrect email or password';
    }

    const parseMsg = utils.parseJsonToObject(readMsg);
    if(Object.keys(parseMsg).length === 0){
        return 'Server side conflict';
    }

    if(parseMsg.password !== hashMsg){
        return 'Incorrect email or password';
    }

    return 'OK';
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