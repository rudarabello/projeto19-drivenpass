var Cryptr = require('cryptr');
var cryptr = new Cryptr('chaveSecreta');
export function encrypt(password) {
    return cryptr.encrypt(password);
}
export function decrypt(password) {
    return cryptr.decrypt(password);
}
