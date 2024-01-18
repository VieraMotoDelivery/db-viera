import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entities";
import { iClientRequest } from "../../interface";

const retrieveClientService = async (
  params: string
): Promise<iClientRequest> => {
  const clienteRepositorio: Repository<Clientes> =
    AppDataSource.getRepository(Clientes);

  const cliente: Clientes = await clienteRepositorio.findOneBy({
    codigo: params,
  });

  return cliente;
};

export default retrieveClientService;
