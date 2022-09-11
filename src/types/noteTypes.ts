import { safenotes } from "@prisma/client";

export type INotesData = Omit<safenotes, "id">