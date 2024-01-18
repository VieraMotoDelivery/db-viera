import { Request, Response } from "express";
import updatePassoService from "../../services/etapas/updateEtapas.service";

const updatePassoControllers = async (req: Request, res: Response) => {
  const response = await updatePassoService(req.params.id, req.body);

  return res.json(response);
};

export default updatePassoControllers;
