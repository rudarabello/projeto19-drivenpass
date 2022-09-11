import { Router } from "express";
import * as notesController from "../controllers/notesController";
import getUserData from "../middlewares/authValidation/getUserdata";
import noteValidation from "../middlewares/noteValidation";

const notesRouter = Router();

notesRouter.post(
    "/categories/notes/create",
    noteValidation,
    getUserData,
    notesController.createNote);
notesRouter.get(
    "/notes",
    getUserData,
    notesController.getNotes);
notesRouter.get(
    "/notes/:id",
    getUserData,
    notesController.getNoteById
);
notesRouter.delete(
    "/notes/delete/:id",
    getUserData,
    notesController.deleteNoteById
);

export default notesRouter;