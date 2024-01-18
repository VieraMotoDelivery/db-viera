import { Request, Response } from "express";
import retrievePassoService from "../../services/etapas/retrieveEtapas.service";

const retrievePassoController = async (req: Request, res: Response) => {
  const response = await retrievePassoService(req.params.id);
  return res.status(200).json(response);
};

export default retrievePassoController;
