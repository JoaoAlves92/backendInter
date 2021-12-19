import {Request, Response} from 'express';

export class PostController {
    
    async makePost(req: Request, res: Response){
        const {texto} = req.body;
        return res.send({msg: texto})
    }
}