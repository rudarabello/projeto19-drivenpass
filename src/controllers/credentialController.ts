import { Request, Response } from "express";
import { ICredentialData } from "../types/credentialTypes";
import * as credentialServices from "../services/credentialService"

export async function createCredential(req:Request, res:Response){
    const { url,username,password,title } 
    : { url:string,username:string,password:string,title:string } = req.body;

    const { userInfo } = res.locals;

    const credential:ICredentialData = {
        url,
        username,
        password,
        title,
        userId: userInfo.userId
    }

    await credentialServices.createCredential(credential);

    return res.status(201).send("created");
};

export async function getCredentials(req:Request, res:Response) {
    const { userInfo } = res.locals;

    const credentials = await credentialServices.getCredentials(userInfo.userId);

    return res.status(200).send(credentials);
}

export async function getCredentialById(req:Request, res:Response) {
    const { userInfo } = res.locals;
    const id:number = Number(req.params.id);

    const credential = await credentialServices.getCredentialById(userInfo.userId,id);

    return res.status(200).send(credential);
}

export async function deleteCredentialById(req:Request, res:Response) {
    const { userInfo } = res.locals;
    const id:number = Number(req.params.id);

    await credentialServices.deleteCredentialById(userInfo.userId,id);

    return res.status(200).send("Credential removed!");
}