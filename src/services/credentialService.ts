import { ICredentialData } from "../types/credentialTypes";
import * as credentialMethods from "../repositories/credentialRepository";
import { checkError } from "../middlewares/errorHandler";
import { encrypt,decrypt } from "../utils/credentialUtils";

export async function createCredential(credential:ICredentialData) {

    const checkCredential = 
    await credentialMethods.findByTitle(credential.title,credential.userId);

    if(checkCredential) throw checkError(401,"You already registered a credential with this title!");

    credential.password = encrypt(credential.password);
    
    await credentialMethods.insert(credential);
}

export async function getCredentials(userId:number) {
    const credentials = await credentialMethods.getMyCredentials(userId);

    credentials.forEach(credential => credential.password = decrypt(credential.password));

    return credentials;
}

export async function getCredentialById(userId:number,id:number) {
    const credential = await credentialMethods.getMyCredentialById(id);

    if(!credential) throw checkError(404,"There's no credential registered with this ID");
    if(credential.userId !== userId) throw checkError(401,"This credential doesn't belong to you!");
    
    credential.password = decrypt(credential.password);

    return credential;
}

export async function deleteCredentialById(userId:number,id:number) {
    const credential = await credentialMethods.getMyCredentialById(id);

    if(!credential) throw checkError(404,"There's no credential registered with this ID");
    if(credential.userId !== userId) throw checkError(401,"This credential doesn't belong to you!");
    
    await credentialMethods.deleteCredentialById(id);
}