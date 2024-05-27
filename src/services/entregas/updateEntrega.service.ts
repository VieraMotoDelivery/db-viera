import AppDataSource from "../../data-source";
import { Repository } from "typeorm";
import { Entregas } from "../../entities/entregas.entites";

const updateEntregaService = async (body) => {
  const entregasRepositorio: Repository<Entregas> = AppDataSource.getRepository(Entregas);

  const ultimaEntrega = await entregasRepositorio
    .createQueryBuilder("entregas")
    .where("entregas.telefone = :telefone", { telefone: body.telefone })
    .orderBy("entregas.id", "DESC")
    .limit(1)
    .getOne();

  const dataDeHoje = new Date();
  const formatar = dataDeHoje.toLocaleString("pt-BR", { timeZone: "UTC" });

  if (ultimaEntrega) {
    if (body.b === undefined) {
      const entrega: Entregas = await entregasRepositorio.save({
        ...ultimaEntrega,
        ...body,
        id: ultimaEntrega.id,
        data: formatar,
      });

      return entrega;
    } else if (body.b === "b") {
      const entrega: Entregas = await entregasRepositorio.save({
        ...ultimaEntrega,
        ...body,
        id: ultimaEntrega.id,
        obs: `${ultimaEntrega.obs} - ${body.obs}`,
        data: formatar,
      });

      return entrega;
    }
  } else {
    // Handle the case when no existing delivery is found
    const novaEntrega: Entregas[] = entregasRepositorio.create({
      ...body,
      data: formatar,
    });
    const entrega = await entregasRepositorio.save(novaEntrega);

    return entrega;
  }
};

export default updateEntregaService;