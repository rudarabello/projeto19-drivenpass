import { Router } from "express";
import getUserData from "../middlewares/authValidation/getUserdata";
import { validateSchema } from "../middlewares/validadeSchema";
import * as wifiController from "../controllers/wifiController";
import wifiSchema from "../schemas/wifiSchema";


const wifiRouter = Router();

wifiRouter.post(
    "/categories/create/wifi",
    validateSchema(wifiSchema),
    getUserData,
    wifiController.createWifi
);
wifiRouter.get(
    "/wifis",
    getUserData,
    wifiController.getWifis
);
wifiRouter.get(
    "/wifis/:id",
    getUserData,
    wifiController.getWifiById
);
wifiRouter.delete(
    "/delete/wifis/:id",
    getUserData,
    wifiController.deleteWifiById
);

export default wifiRouter;