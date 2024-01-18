import { Request, Response } from "express";
import createWebhookService from "../../services/webhook/createWebhook.service";



const createWebhookController = async (req: Request, res: Response) => {
  const response = await createWebhookService(req.body);

  return res.status(201).json(response);
};
export default createWebhookController;
