import { Router } from "express";
import getUserData from "../middlewares/authValidation/getUserdata";
import { validateSchema } from "../middlewares/validadeSchema";
import * as cardController from "../controllers/cardController";
import cardSchema from "../schemas/cardSchema";

const cardsRouter = Router();

cardsRouter.post(
    "/categories/cards/create",
    validateSchema(cardSchema),
    getUserData,
    cardController.createCard
);
cardsRouter.get(
    "/cards",
    getUserData,
    cardController.getCards
);
cardsRouter.get(
    "/cards/:id",
    getUserData,
    cardController.getCardById
);
cardsRouter.delete(
    "/cards/delete/:id",
    getUserData,
    cardController.deleteCardById
);

export default cardsRouter;