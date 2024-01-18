import { Request, Response } from "express";
import updateEntregaService from "../../services/entregas/updateEntrega.service";

const updateEntregaController = async (req: Request, res: Response) => {
  const response = await updateEntregaService(req.body);

  return res.status(200).json(response);
};

export default updateEntregaController;
