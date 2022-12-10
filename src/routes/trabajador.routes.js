import { Router } from "express";
import {getTrabajador,postTrabajador,getTrabajadorById,DeleteTrabajadorById,UpdateTrabajadorById} from '../controllers/trabajador.controller'

const router = Router()

router.get('/trabajador', getTrabajador);
router.post('/trabajador',postTrabajador)
router.get('/trabajador/:id',getTrabajadorById)
router.delete('/trabajador/:id',DeleteTrabajadorById)
router.put('/trabajador/:id',UpdateTrabajadorById)
export default router