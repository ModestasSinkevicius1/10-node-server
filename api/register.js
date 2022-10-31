import { file } from "../lib/file.js";
import { IsValid } from "../lib/IsValid.js";
import { utils } from "../lib/utils.js";

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
    console.log('GET register');
    return 'GET API register';
}

handler._handler.post = async (data) => {

    const { payload } = data;
    const { username, email, password, repeatPassword } = payload;

    delete payload.repeatPassword;

    const [errUsername, msgUsername] = IsValid.username(username);
    if(errUsername) {
        return msgUsername;
    }

    const [errEmail, msgEmail] = IsValid.email(email);
    if(errEmail) {
        return msgEmail;
    }

    const [errPassword, msgPassword] = IsValid.password(password);
    if(errPassword) {
        return msgPassword;
    }

    if(password !== repeatPassword) {
        return 'Passwords don\'t match';
    }

    const salt = 'f323kht32';
    const [hashErr, hashMsg] = utils.hash(password + salt);

    if(hashErr) {
        return 'Failed to create user';
    }

    payload.password = hashMsg;

    const [error, msg] = await file.create('/users', email + '.json', payload);  

    return error ? 'Failed to create account' : msg;
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