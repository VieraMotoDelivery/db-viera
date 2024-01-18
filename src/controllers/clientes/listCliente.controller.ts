import { Request, Response } from "express";
import listClientService from "../../services/clientes/listCliente.service";


const listClientControllers = async (req: Request, res: Response) => {

    const response = await listClientService()

    return res.status(200).json(response);
}

export default listClientControllers