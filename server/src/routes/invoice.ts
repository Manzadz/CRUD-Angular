import { Router } from 'express';
import { getInvoice } from '../controllers/invoice';


const router = Router();

router.get('/:id', getInvoice)

export default router;