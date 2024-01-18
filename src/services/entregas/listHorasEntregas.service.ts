import { ILike, Repository, getRepository } from "typeorm";
import AppDataSource from "../../data-source";
import { Entregas } from "../../entities/entregas.entites";
import { Etapas } from "../../entities/etapas.entites";

const listHorasEntregas = async () => {
  const entregaRepositorio: Repository<Entregas> =
    AppDataSource.getRepository(Entregas);

  const etapasRepositorio = AppDataSource.getRepository(Etapas);

  const dataDeHoje = new Date();

  const formatar = dataDeHoje.toLocaleString("pt-BR", { timeZone: "UTC" });

  const diaMes = formatar.slice(0, 5);

  // -------------------------------------------------------------------------

  const entregas: Entregas[] = await entregaRepositorio
    .createQueryBuilder("entregas")
    .where("entregas.data like :diaMes", {
      diaMes: `%${diaMes}%`,
    })
    .andWhere("entregas.msgwhats = :msgwhats", {
      msgwhats: false,
    })
    .andWhere("entregas.formadepagamento = :formadepagamento", {
      formadepagamento: "",
    })
    .andWhere("entregas.codigo = :codigo", {
      codigo: "",
    })
    .getMany();

  // -------------------------------------------------------------------------
  const dadosUnicos = new Map();

  entregas.forEach((elem) => {
    if (!dadosUnicos.has(elem.telefone)) {
      dadosUnicos.set(elem.telefone, elem);
    }
  });
  const result = [...dadosUnicos.values()];

  // -------------------------------------------------------------------------
  for (let dados of result) {
    const telefone = dados.telefone.slice(0, 13);
    const dia = dados.data.slice(0, 2);
    const mes = dados.data.slice(3, 5);
    const ano = dados.data.slice(6, 10);
    const hora = dados.data.slice(12, 14);
    const minutos = dados.data.slice(15, 17);
    const segundos = dados.data.slice(18, 20);

    const db = new Date(
      `${ano}-${mes}-${dia}T${hora}:${minutos}:${segundos}+00:00`
    );

    const timesDB = db.getTime();

    const agora = dataDeHoje.getTime();

    if (agora - 1800000 >= timesDB) {
      const data = {
        number: telefone,
        message: `Lamentamos, mas devido à falta de resposta ou interação, este atendimento foi encerrado. Caso precise realizar um pedido de entrega futuramente por favor, entre em contato novamente. Estaremos aqui prontamente para atendê-lo.

Obrigado e até a próxima! 😃`,
      }

      await fetch("https://chatbot-sos.up.railway.app/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => console.log(err));

      const etapas: Etapas = await etapasRepositorio.findOneBy({
        telefone: dados.telefone,
      });

      etapasRepositorio.save({
        ...etapas,
        etapa: "a",
      });
    }
  }
  // -------------------------------------------------------------------------
  for (let dados of entregas) {
    const dia = dados.data.slice(0, 2);
    const mes = dados.data.slice(3, 5);
    const ano = dados.data.slice(6, 10);
    const hora = dados.data.slice(12, 14);
    const minutos = dados.data.slice(15, 17);
    const segundos = dados.data.slice(18, 20);

    const db = new Date(
      `${ano}-${mes}-${dia}T${hora}:${minutos}:${segundos}+00:00`
    );

    const timesDB = db.getTime();

    const agora = dataDeHoje.getTime();

    if (agora - 1800000 >= timesDB) {
      await entregaRepositorio.save({
        ...dados,
        msgwhats: true,
      });
    }
  }

  return result;
};

export default listHorasEntregas;
