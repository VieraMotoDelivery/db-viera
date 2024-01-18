import { Request, Response } from "express";
import deleteEntregasService from "../../services/entregas/deletarEntregas.service";

const deleteEntregasController = async (req: Request, res: Response) => {
  await deleteEntregasService();

  return res.status(204).json({});
};
export default deleteEntregasController;
