import { Request, Response } from "express";
import Client from "../models/client";


export const updateClient = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const client = await Client.findByPk(id);
        if (client) {
            await client.update(body);
            res.json({
                msg: 'Cliente actualizado con exito'
            });
        } else {
            res.status(404).json({
                msg: 'No extiste un cliente con este id'
            });
        } try { } catch (error) {
            console.log(error);
            res.json({
                msg: 'Ocurrio un error, comuniquese con soporte'
            });
        }

    }
    finally {
    }
};
