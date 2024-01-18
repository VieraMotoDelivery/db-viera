import { Router } from "express";
import encontrarTelefoneController from "../controllers/fisica/encontrarTelefone.controller";

const fisicaRoutes: Router = Router();

fisicaRoutes.get("/:telefone", encontrarTelefoneController);

export default fisicaRoutes;
