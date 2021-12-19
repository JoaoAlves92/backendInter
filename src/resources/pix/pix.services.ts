import { getRepository } from "typeorm";
import { Pix } from "../../entity/Pix";
import { User } from "../../entity/User";
import { SendPix } from "./dtos/pix.sendpix.dtos";

export default class PixService {
    
    async sendPix(pix: SendPix) {
        const { payer, receiver, amount } = pix
        const pixRepo = getRepository(Pix)
        const userRepo = getRepository(User)
        const existsPayer = await userRepo.findOne({where: {email: payer}})

        if (!existsPayer) {
            return {msg: "Pagador não encontrado."}
        } else {
            const existsReceiver = await userRepo.findOne({where: {email: receiver}})

            if (!existsReceiver) {
                return {msg: "Recebedor não encontrado."}
            }

            if (existsPayer.wallet < amount) {
                return {msg: "Saldo insuficiente"}
            } else if (amount <= 0) {
                return {msg: "O valor não pode ser igual ou menor que 0"}
            }

            existsPayer.wallet -= amount
            existsReceiver.wallet += amount

            const received = await userRepo.save(existsReceiver)
            const payed = await userRepo.save(existsPayer)

            const pixData = {
                requesting_user: received,
                paying_user: payed,
                status: 'closed',
                value: amount
            }

            await pixRepo.save(pixData)

            return pixData
        }

    }
}