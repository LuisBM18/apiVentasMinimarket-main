import { Router } from "express";
import {getVenta,postVenta,getVentaById,DeleteVentaById,UpdateVentaById} from '../controllers/venta.controller'

const router = Router()

router.get('/venta', getVenta);
router.post('/venta',postVenta)
router.get('/venta/:id',getVentaById)
router.delete('/venta/:id',DeleteVentaById)
router.put('/venta/:id',UpdateVentaById)
export default router