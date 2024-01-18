import { Repository } from "typeorm";
import AppDataSource from "../../data-source";

import { iClientRequest } from "../../interface";
import { Clientes } from "../../entities/clientes.entities";

const updateClientService = async (
  body: iClientRequest,
  params: string
): Promise<iClientRequest> => {
  const clienteRepositorio: Repository<Clientes> =
    AppDataSource.getRepository(Clientes);

  const encontrarCliente: Clientes = await clienteRepositorio.findOneBy({
    codigo: params,
  });

  const cliente: Clientes = await clienteRepositorio.save({
    ...encontrarCliente,
    ...body,
  });
  return cliente;
};

export default updateClientService;
