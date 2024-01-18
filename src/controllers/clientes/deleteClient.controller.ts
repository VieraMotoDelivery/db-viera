import { Request, Response } from "express";
import deleteClientService from "../../services/clientes/deleteClient.service";

const deleteClientController = async (req: Request, res: Response) => {
  await deleteClientService(req.params.codigo);

  return res.status(204).json({});
};
export default deleteClientController;
