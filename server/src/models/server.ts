import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routesClient from '../routes/client';
import routesInvoice from '../routes/invoice';
import db from '../db/connection'

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto 3000' )
        })
    }

    routes() { 
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API Working'
            })
        })
        this.app.use('/api/client', routesClient ),
        this.app.use('/api/invoice', routesInvoice)
    }
    midlewares() {
        // parseamos el body
        this.app.use(express.json());
        //cors
        this.app.use(cors());
    }

    async dbConnect(){
        try{
            await db.authenticate();
            console.log('Base de datos conectada')
        } catch(error) {
            console.log(error);
            console.log('Error al conectarse a la base de datos')
        }
        
    }
}

export default Server;