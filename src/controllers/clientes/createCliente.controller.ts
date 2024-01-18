import { Request, Response } from "express";
import { iClientRequest } from "../../interface";
import createClientService from "../../services/clientes/createCliente.service";

const createClientController = async (req: Request, res: Response) => {
  const data: iClientRequest = req.body;

  const response = await createClientService(data);

  return res.status(201).json(response);
};
export default createClientController;
