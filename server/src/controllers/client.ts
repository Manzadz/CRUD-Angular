import { Request, Response } from "express"
import Client from "../models/client"


export const getClients = async (req: Request, res: Response) => {
    const listClients = await Client.findAll()
    res.json(listClients)

}

export const getClient = async (req: Request, res: Response) => {
    const { id } = req.params;
    const client = await Client.findByPk(id);

    if(client) { 
        res.json(client)
    } else {
        res.status(404).json({
            msg: 'No existe un cliente con este id'
        })
    
    }

    
}

export const deleteClient = async (req: Request, res: Response) => {
    const { id } = req.params;
    const client = await Client.findByPk(id);

    if(!client) {
        res.status(404).json({
            msg : 'No existe un cliente con ese id'
        })

    } else {
        await client.destroy();
        res.json({
            msg: 'El cliente fue eliminado'
        })
    }

}

export const postClient = async (req: Request, res: Response) => {
    const{ body } = req;

    try { 
        await Client.create(body);
        
        res.json({
            msg: 'El producto fue agregado con exito'
        })
 
    } catch (error) {
        console.log(error)
        res.json({
            msg: 'Ocurrio un error, comuniquese con soporte'
        })
    }

}


