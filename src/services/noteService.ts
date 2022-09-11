import { INotesData } from "../types/noteTypes";
import * as noteMethods from "../repositories/noteRepository";
import { checkError } from "../middlewares/errorHandler";

export async function createNote(note: INotesData) {
    const checknote = await noteMethods.findByTitle(note.title, note.userId);
    if (checknote) throw checkError(401, "You already registered a note with this title!");
    await noteMethods.insert(note);
}

export async function getNotes(userId: number) {
    const notes = await noteMethods.getMyNotes(userId);
    return notes;
}

export async function getNoteById(userId: number, id: number) {
    const note = await noteMethods.getMyNoteById(id);
    if (!note) throw checkError(404, "There's no note registered with this ID");
    if (note.userId !== userId) throw checkError(401, "This note doesn't belong to you!");
    return note;
}

export async function deleteNoteById(userId: number, id: number) {
    const note = await noteMethods.getMyNoteById(id);
    if (!note) throw checkError(404, "There's no note registered with this ID");
    if (note.userId !== userId) throw checkError(401, "This note doesn't belong to you!");
    await noteMethods.deleteNoteById(id);
}