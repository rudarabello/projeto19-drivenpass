import { Router } from "express";
import * as notesController from "../controllers/notesController";
import getUserData from "../middlewares/authValidation/getUserdata";
import { validateSchema } from "../middlewares/validadeSchema";
import noteSchema from "../schemas/noteSchema";

const notesRouter = Router();

notesRouter.post(
    "/categories/notes/create",
    validateSchema(noteSchema),
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