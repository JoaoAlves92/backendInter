import {Request, Response} from 'express';
import { Any } from 'typeorm';
import UserService from './user.services';

export class UserController {
    
    async signIn(req: Request, res: Response){
        const { email, password } = req.body;
        const userService = new UserService()
        const user = await userService.signin({email, password})
        return res.status(200).send(user)
    }

    async signUp(req: Request, res: Response){
        const userService = new UserService()
        const user = await userService.signup(req.body)
        return res.status(200).send(user)
    }

    async meUser(req: Request, res: Response){
        const userService = new UserService()
        const user = await userService.meUser(req.headers)
        return res.status(200).send(user)
    }
}