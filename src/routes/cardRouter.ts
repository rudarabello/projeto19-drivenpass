import { Router } from "express";
import getUserData from "../middlewares/authValidation/getUserdata";
import cardValidation from "../middlewares/cardValidation";
import * as cardController from "../controllers/cardController";

const cardsRouter = Router();

cardsRouter.post(
    "/categories/cards/create",
    cardValidation,
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