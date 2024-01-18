import { Router } from "express";
import listenWebhookController from "../controllers/webhook/listenWebhook.controller";
import listWebhookController from "../controllers/webhook/listWebhook.controller";
import createWebhookController from "../controllers/webhook/createWebhook.controller";
import deleteWebhookController from "../controllers/webhook/deleteWebhook.controller";

const webHook: Router = Router();

webHook.post("", listenWebhookController);
webHook.get("", listWebhookController);
webHook.post("/create", createWebhookController);
webHook.delete("", deleteWebhookController);

export default webHook;
