import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Entregas } from "../../entities/entregas.entites";

const listQuantityDeliveriesCompanyService = async (params) => {
  const entregaRepositorio: Repository<Entregas> =
    AppDataSource.getRepository(Entregas);

  const dataDeHoje = new Date();

  const formatar = dataDeHoje.toLocaleString("pt-BR", { timeZone: "UTC" });

  const diaMes = formatar.slice(0, 5);

  const entregas: Entregas[] = await entregaRepositorio
    .createQueryBuilder("entregas")
    .where("entregas.data like :diaMes", {
      diaMes: `%${diaMes}%`,
    })
    .andWhere("entregas.codigo = :codigo", {
      codigo: params,
    })
    .andWhere("entregas.formadepagamento != :formadepagamento", {
      formadepagamento: "",
    })
    .getMany();

  return entregas;
};

export default listQuantityDeliveriesCompanyService;
