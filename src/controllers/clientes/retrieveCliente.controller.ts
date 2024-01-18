import { Request, Response } from "express";
import retrieveClientService from "../../services/clientes/retrieveCliente.service";

const retrieveClientController = async (req: Request, res: Response) => {
  const user = await retrieveClientService(req.params.id);
  return res.status(200).json(user);
};

export default retrieveClientController;
