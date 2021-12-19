import {Request, Response} from 'express';
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
}