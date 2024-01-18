import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entities";

const deleteClientService = async (codigo): Promise<void> => {
  const clientesRepositorio: Repository<Clientes> =
    AppDataSource.getRepository(Clientes);

  await clientesRepositorio
    .createQueryBuilder("clientes")
    .where("clientes.codigo = :codigo", { codigo: codigo })
    .delete()
    .execute();
};

export default deleteClientService;


