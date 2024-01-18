import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Entregas } from "../../entities/entregas.entites";

const deleteEntregasService = async (): Promise<void> => {
  const entregasRepositorio: Repository<Entregas> =
    AppDataSource.getRepository(Entregas);

  await entregasRepositorio
    .createQueryBuilder()
    .delete()
    .from(Entregas)
    .execute();
};

export default deleteEntregasService;
