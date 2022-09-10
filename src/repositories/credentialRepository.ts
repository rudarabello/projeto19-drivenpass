import connection from "../database/prismaPg";
import { ICredentialData } from "../types/credentialTypes";

export async function insert(credential:ICredentialData) {
    await connection.credentials.create({data: credential});
}

export async function findByTitle(title:string,userId:number) {
    return await connection.credentials.findFirst({where: {title,userId}});
}

export async function getMyCredentials(userId:number){
    return await connection.credentials.findMany({where: {userId}});
}

export async function getMyCredentialById(id:number){
    return await connection.credentials.findFirst({where: {id}});
}

export async function deleteCredentialById(id:number){
    await connection.credentials.delete({where: {id}});
}