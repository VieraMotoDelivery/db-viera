import { Repository } from "typeorm";
import { Clientes } from "../../entities/clientes.entities";
import AppDataSource from "../../data-source";

const listClientService = async () => {
  const clienteRepositorio: Repository<Clientes> =
    AppDataSource.getRepository(Clientes);

  const cliente: Clientes[] = await clienteRepositorio
    .createQueryBuilder("clientes")
    .getMany();

  return cliente;
};

export default listClientService;
