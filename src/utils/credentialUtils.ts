const Cryptr = require('cryptr');
const cryptr = new Cryptr('chaveSecreta');

export function encrypt(password:string){
    return cryptr.encrypt(password);
}

export function decrypt(password:string){
    return cryptr.decrypt(password);
}