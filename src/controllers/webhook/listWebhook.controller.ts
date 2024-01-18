import { Request, Response } from "express";
import listEntregasService from "../../services/webhook/listWebhook.service";

const listWebhookController = async (req: Request, res: Response) => {
  const reponse = await listEntregasService();

  return res.status(200).json(reponse);
};
export default listWebhookController;
