import AppDataSource from "../../data-source";
import { Webhook } from "../../entities/webhook.entities";

const listenWebhookService = async (body: any) => {
  const webhookRepositorio = AppDataSource.getRepository(Webhook);

  const webhook: Webhook = await webhookRepositorio.findOneBy({
    entregaidfood: body.uid,
  });

  const dados = {
    number: webhook.telefone,
    message: `O motoboy aceitou o pedido: ${webhook.iddatabase}
     
Endereço: ${webhook.entrega}

Em alguns minutos ele realizará a coleta. Obrigado! 😁`,
  };

  await fetch("https://chatbot-sos.up.railway.app/send-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

export default listenWebhookService;
