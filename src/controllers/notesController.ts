import { Request, Response } from "express";
import { INotesData } from "../types/noteTypes";
import * as noteServices from "../services/noteService";

export async function createNote(req: Request, res: Response) {
    const { title, description }
        : { title: string, description: string } = req.body;
    const { userInfo } = res.locals;
    const note: INotesData = {
        description,
        title,
        userId: userInfo.userId
    }
    await noteServices.createNote(note);
    return res.status(201).send("created");
};

export async function getNotes(req: Request, res: Response) {
    const { userInfo } = res.locals;
    const notes = await noteServices.getNotes(userInfo.userId);
    return res.status(200).send(notes);
}

export async function getNoteById(req: Request, res: Response) {
    const { userInfo } = res.locals;
    const id: number = Number(req.params.id);
    const note = await noteServices.getNoteById(userInfo.userId, id);
    return res.status(200).send(note);
}

export async function deleteNoteById(req: Request, res: Response) {
    const { userInfo } = res.locals;
    const id: number = Number(req.params.id);
    await noteServices.deleteNoteById(userInfo.userId, id);
    return res.status(200).send("Note removed!");
}