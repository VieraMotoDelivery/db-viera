import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entities";
import { iClientRequest } from "../../interface";

const encontrarTelefoneService = async (params: string) => {
  const clienteRepositorio: Repository<Clientes> =
    AppDataSource.getRepository(Clientes);

  const telefoneum: Clientes = await clienteRepositorio.findOneBy({
    telefoneum: params,
  });
  const telefonedois: Clientes = await clienteRepositorio.findOneBy({
    telefonedois: params,
  });
  const telefonetres: Clientes = await clienteRepositorio.findOneBy({
    telefonetres: params,
  });
  const telefonequatro: Clientes = await clienteRepositorio.findOneBy({
    telefonequatro: params,
  });
  const telefonecinco: Clientes = await clienteRepositorio.findOneBy({
    telefonecinco: params,
  });

  if (telefoneum) {
    return telefoneum;
  }

  if (telefonedois) {
    return telefonedois;
  }

  if (telefonetres) {
    return telefonetres;
  }

  if (telefonequatro) {
    return telefonequatro;
  }

  if (telefonecinco) {
    return telefonecinco;
  }
};

export default encontrarTelefoneService;
