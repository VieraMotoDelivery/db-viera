import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Webhook } from "../../entities/webhook.entities";

const deleteWebhookService = async (): Promise<void> => {
  const webhookRepositorio: Repository<Webhook> =
    AppDataSource.getRepository(Webhook);

  await webhookRepositorio
    .createQueryBuilder()
    .delete()
    .from(Webhook)
    .execute();
};

export default deleteWebhookService;
