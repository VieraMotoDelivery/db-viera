import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleErrorMiddleware } from "./errors/appError";
import clientesRoutes from "./routes/clientes.routes";
import etapasRoutes from "./routes/etapas.routes";
import entregasRoutes from "./routes/entregas.routes";
import fisicaRoutes from "./routes/fisica.routes";
import webHook from "./routes/webhook.routes";
import { Entregas } from "./entities/entregas.entites";
import { Repository } from "typeorm";
import AppDataSource from "./data-source";
import { Webhook } from "./entities/webhook.entities";
const CronJob = require("cron").CronJob;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/clientes", clientesRoutes);
app.use("/etapas", etapasRoutes);
app.use("/entregas", entregasRoutes);
app.use("/fisica", fisicaRoutes);
app.use("/webhook", webHook);
app.use(handleErrorMiddleware);

const job = new CronJob("24 14 * * *", async () => {
  const entregasRepositorio: Repository<Entregas> =
    AppDataSource.getRepository(Entregas);

  const webhookRepositorio: Repository<Webhook> =
    AppDataSource.getRepository(Webhook);


  try {
    const totalEntregas = await entregasRepositorio.count();
    const data = {
      number: "14998536591@c.us",
      message: totalEntregas
    };
    await fetch("https://viera-chatbot.up.railway.app/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.log(err));

  } catch (error) {
    console.log("deu erro na quantidade de entrega da semana")
  }

  await entregasRepositorio
    .createQueryBuilder()
    .delete()
    .from(Entregas)
    .execute();

  await webhookRepositorio
    .createQueryBuilder()
    .delete()
    .from(Webhook)
    .execute();
}, null,
  true,
  "America/Sao_Paulo");
job.start();

export default app;
