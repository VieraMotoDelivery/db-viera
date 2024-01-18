import updateClientService from "../../services/clientes/updateCliente.service";
import { Request, Response } from "express";

const updateClientControllers = async (req: Request, res: Response) => {
  const response = await updateClientService(req.body, req.params.id);

  return res.json(response);
};

export default updateClientControllers;
