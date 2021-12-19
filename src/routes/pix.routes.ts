import { Router } from "express";
import { PixController } from "../resources/pix/pix.controllers";

const pixRouter = Router();
const pixController = new PixController();

pixRouter.get('/', pixController.transactions)
pixRouter.post('/pay', pixController.sendPix)

export default pixRouter;