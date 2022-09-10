
import { Router } from "express";
import getUserData from "../middlewares/authValidation/getUserdata";
import credentialValidation from "../middlewares/credentialValidation";
import * as credentialController from "../controllers/credentialController";

const credentialRouter = Router();

credentialRouter.post("/categories/credentials/create",credentialValidation,getUserData,credentialController.createCredential);
credentialRouter.get("/credentials",getUserData,credentialController.getCredentials);
credentialRouter.get("/credentials/:id",getUserData,credentialController.getCredentialById);
credentialRouter.delete("/credentials/delete/:id",getUserData,credentialController.deleteCredentialById);

export default credentialRouter;