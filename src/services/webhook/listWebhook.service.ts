import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Webhook } from "../../entities/webhook.entities";

const listEntregasService = async () => {
  const webhookRepositorio: Repository<Webhook> =
    AppDataSource.getRepository(Webhook);

  const webhook: Webhook[] = await webhookRepositorio
    .createQueryBuilder("webhook")
    .getMany();

  return webhook;
};

export default listEntregasService;
