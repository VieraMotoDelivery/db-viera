import { Request, Response } from "express";
import createPassoService from "../../services/etapas/createEtapas.service";

const createPassoController = async (req: Request, res: Response) => {
  const response = await createPassoService(req.body);

  return res.status(201).json(response);
};

export default createPassoController;
