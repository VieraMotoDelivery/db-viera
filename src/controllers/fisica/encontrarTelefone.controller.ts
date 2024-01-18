import { Request, Response } from "express";
import encontrarTelefoneService from "../../services/fisica/encontrarTelefone.service";

const encontrarTelefoneController = async (req: Request, res: Response) => {
  const response = await encontrarTelefoneService(req.params.telefone);
  return res.status(200).json(response);
};

export default encontrarTelefoneController;
