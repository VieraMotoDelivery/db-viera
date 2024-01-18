import { Request, Response } from "express";
import listEntregasServices from "../../services/entregas/listEntrega.service";

const listEntregasController = async (req: Request, res: Response) => {
  const response = await listEntregasServices(req.params.date);

  return res.status(200).json(response);
};

export default listEntregasController;
