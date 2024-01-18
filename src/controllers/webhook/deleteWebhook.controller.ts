import { Request, Response } from "express";
import deleteWebhookService from "../../services/webhook/deleteWebhook.service";



const deleteWebhookController = async (req: Request, res: Response) => {
  await deleteWebhookService();

  return res.status(204).json({});
};

export default deleteWebhookController;
