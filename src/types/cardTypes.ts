
import { cards } from "@prisma/client";

export type ICardData = Omit<cards, "id">;