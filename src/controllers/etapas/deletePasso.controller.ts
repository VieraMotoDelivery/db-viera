import { Request, Response } from "express";
import deleteEtapasService from "../../services/etapas/deleteEtapas.service";

const deletePassoController = async (req: Request, res: Response) => {
  await deleteEtapasService();

  return res.status(204).json({});
};

export default deletePassoController;
