import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { Pix } from '../../entity/Pix';
import PixService from './pix.services';

export class PixController {
    async transactions(req: Request, res: Response){
        const pixRepo = getRepository(Pix)
        const pixes = pixRepo.find({
            take: 10
        })
        return res.status(200).send(pixes)
    }

    async sendPix(req: Request, res: Response){
        const pixService = new PixService()
        const data = await pixService.sendPix(req.body)
        return res.status(200).send(data)
    }
}