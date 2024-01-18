import { Request, Response } from "express";
import listQuantityDeliveriesCompanyService from "../../services/entregas/listQuantityDeliveriesCompany.service";

const listQuantityDeliveriesCompanyController = async (
  req: Request,
  res: Response
) => {
  const response = await listQuantityDeliveriesCompanyService(req.params.code);

  return res.status(200).json(response);
};

export default listQuantityDeliveriesCompanyController;
