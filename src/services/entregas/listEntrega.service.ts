import { ILike, Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Entregas } from "../../entities/entregas.entites";

const listEntregasServices = async (params) => {
  if (params) {
    const entregaRepositorio: Repository<Entregas> =
      AppDataSource.getRepository(Entregas);

    let inicio = params.slice(0, 2);
    let final = params.slice(params.length - 2);

    const entregas: Entregas[] = await entregaRepositorio.find({
      where: { data: ILike(`%${inicio}/${final}%`) },
    });

    return entregas;
  }
};

export default listEntregasServices;
