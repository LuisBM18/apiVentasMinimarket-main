import { Router } from "express";
import {getClientes,postCliente,getClienteById,DeleteClienteById,UpdateClienteById} from '../controllers/clientes.controller'

const router = Router()

router.get('/clientes', getClientes);
router.post('/clientes',postCliente)
router.get('/clientes/:id',getClienteById)
router.delete('/clientes/:id',DeleteClienteById)
router.put('/clientes/:id',UpdateClienteById)
export default router