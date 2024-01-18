import { Request, Response } from "express";
import deleteNumeroClienteService from "../../services/clientes/deleteNumeroCliente.service";

const deleteNumeroClienteController = async (req: Request, res: Response) => {
  await deleteNumeroClienteService(req.params.empresa, req.params.numero);

  return res.status(204).json({});
};
export default deleteNumeroClienteController;
