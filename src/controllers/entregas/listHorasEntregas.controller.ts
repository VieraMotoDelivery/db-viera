import { Request, Response } from "express";
import listHorasEntregas from "../../services/entregas/listHorasEntregas.service";

const listHorasEntregasController = async (req: Request, res: Response) => {
  const response = await listHorasEntregas();

  return res.status(200).json(response);
};

export default listHorasEntregasController;
