import { Router } from "express";
import userRouter from "./userRouter";
import credentialRouter from "./credentialRouter";
import notesRouter from "./notesRouter";
import cardsRouter from "./cardRouter";
import wifiRouter from "./wifiRouter";

const router = Router();

router.use(userRouter);
router.use(credentialRouter);
router.use(notesRouter);
router.use(cardsRouter);
router.use(wifiRouter);

export default router;