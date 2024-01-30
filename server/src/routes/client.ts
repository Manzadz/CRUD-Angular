import { Router } from 'express';
import { deleteClient, getClient, getClients, postClient } from '../controllers/client';
import { updateClient } from "../controllers/updateClient";


const router = Router();

router.get('/', getClients)
router.get('/:id', getClient)
router.delete('/:id', deleteClient)
router.post('/', postClient)
router.put('/:id', updateClient)

export default router;