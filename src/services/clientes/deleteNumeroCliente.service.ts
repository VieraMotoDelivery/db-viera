import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entities";
import { AppError } from "../../errors/appError";

const deleteNumeroClienteService = async (empresa, numero): Promise<void> => {
    const clientesRepositorio: Repository<Clientes> =
        AppDataSource.getRepository(Clientes);

    const clienteExistente = await clientesRepositorio.findOne({
        where: { codigo: empresa },
    });

    if (!clienteExistente) {
        throw new AppError("Cliente não encontrado", 404);
    }

    const campoTelefone = `telefone${numero}`;
    clienteExistente[campoTelefone] = null;

    await clientesRepositorio.save(clienteExistente);

};

export default deleteNumeroClienteService;
