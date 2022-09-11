
import connection from "../database/prismaPg";
import { INotesData } from "../types/noteTypes";

export async function insert(note:INotesData) {
    await connection.safenotes.create({data: note});
}

export async function findByTitle(title:string,userId:number) {
    return await connection.safenotes.findFirst({where: {title,userId}});
}

export async function getMyNotes(userId:number){
    return await connection.safenotes.findMany({where: {userId}});
}

export async function getMyNoteById(id:number){
    return await connection.safenotes.findFirst({where: {id}});
}

export async function deleteNoteById(id:number){
    await connection.safenotes.delete({where: {id}});
}