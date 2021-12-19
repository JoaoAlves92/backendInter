import express from "express";
import { createConnection } from "typeorm";
import { Request, Response } from 'express';
import routes from "./routes";

createConnection().then( connection => {
    const app = express();

    app.use(express.json())
    app.use(express.json())
    app.use(routes)

    app.get('/', (req: Request, res: Response) => {
        return res.send({msg: 'Hello world!'})
    })

    app.listen(3000, () => {
        console.log('Servidor subiu')
    })
}).catch(error => {
    console.log('Unable to connect to database', error)
})
