import { Request, Response } from "express"
import Invoice from "../models/client"


export const getInvoices = async (req: Request, res: Response) => {
    const listInvoice = await Invoice.findAll()
    res.json(listInvoice)

}

export const getInvoice = async (req: Request, res: Response) => {
    const { id } = req.params;
    const invoice = await Invoice.findByPk(id);

    if(invoice) { 
        res.json(invoice)
    } else {
        res.status(404).json({
            msg: 'No existe una factura con este id'
        })
    
    }

    
}