import { Request, Response } from "express";
import createEntregaService from "../../services/entregas/createEntregas.service";

const createEntregaController = async (req: Request, res: Response) => {
  const response = await createEntregaService(req.body);

  return res.status(201).json(response);
};

export default createEntregaController;
