import { Router } from "express";
import createEntregaController from "../controllers/entregas/createEntregas.controller";
import updateEntregaController from "../controllers/entregas/updateEntrega.controller";
import listEntregasController from "../controllers/entregas/listEntregas.controller";
import deleteEntregasController from "../controllers/entregas/deleteEntregas.controller";
import listHorasEntregasController from "../controllers/entregas/listHorasEntregas.controller";
import listQuantityDeliveriesCompanyController from "../controllers/entregas/listQuantityDeliveriesCompany.controller";

const entregasRoutes: Router = Router();

entregasRoutes.post("", createEntregaController);
entregasRoutes.patch("", updateEntregaController);
entregasRoutes.get("/:date", listEntregasController);
entregasRoutes.get("", listHorasEntregasController);
entregasRoutes.get("/company/:code", listQuantityDeliveriesCompanyController);
entregasRoutes.delete("", deleteEntregasController);

export default entregasRoutes;
