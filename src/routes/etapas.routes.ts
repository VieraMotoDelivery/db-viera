import { Router } from "express";
import createPassoController from "../controllers/etapas/createEtapas.controller";
import retrievePassoController from "../controllers/etapas/retrieveEtapas.controller";
import updatePassoControllers from "../controllers/etapas/updateEtapas.controller";
import deletePassoController from "../controllers/etapas/deletePasso.controller";

const etapasRoutes: Router = Router();

etapasRoutes.post("", createPassoController);
etapasRoutes.get("/:id", retrievePassoController);
etapasRoutes.patch("/:id", updatePassoControllers);
etapasRoutes.delete("", deletePassoController);

export default etapasRoutes;
