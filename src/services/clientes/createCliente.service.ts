import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entities";
import { AppError } from "../../errors/appError";
import { iClientRequest } from "../../interface";

const createClientService = async (data: iClientRequest) => {
  const clienteRepositorio = AppDataSource.getRepository(Clientes);

  const encontrarCodigo: Clientes = await clienteRepositorio.findOneBy({
    codigo: data.codigo,
  });

  if (encontrarCodigo) {
    throw new AppError("Já existe um cliente cadastrado com esse código.", 400);
  }

  const cliente = clienteRepositorio.create(data);

  await clienteRepositorio.save(cliente);

  return cliente;
};

export default createClientService;
