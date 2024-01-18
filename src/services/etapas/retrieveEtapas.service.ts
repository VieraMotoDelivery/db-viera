import { Repository } from "typeorm";
import { Etapas } from "../../entities/etapas.entites";
import AppDataSource from "../../data-source";

const retrievePassoService = async (params: string) => {
  const etapasRepositorio: Repository<Etapas> =
    AppDataSource.getRepository(Etapas);

  // const etapas: Etapas = await etapasRepositorio.findOneBy({
  //   telefone: params,
  // });
  const etapas = await etapasRepositorio
  .createQueryBuilder("etapas")
  .where("etapas.telefone = :telefone", { telefone: params })
  .orderBy("etapas.id", "DESC")
  .limit(1)
  .getOne();

  return etapas;
};

export default retrievePassoService;
