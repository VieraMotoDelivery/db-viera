import AppDataSource from "../../data-source";
import { Webhook } from "../../entities/webhook.entities";


const createWebhookService = async (body: any) => {
  const webhookRepositorio = AppDataSource.getRepository(Webhook);

  const webhook = webhookRepositorio.create(body);

  await webhookRepositorio.save(webhook);

  return webhook;
};

export default createWebhookService;
