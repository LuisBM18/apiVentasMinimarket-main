import { Router } from "express";
import {getDetalleVenta,postDetalleVenta,getDetalleVentaById,DeleteDetalleVentaById,UpdateDetalleVentaById} from '../controllers/detalleVenta.controllers'

const router = Router()

router.get('/detalleVenta', getDetalleVenta);
router.post('/detalleVenta',postDetalleVenta)
router.get('/detalleVenta/:id',getDetalleVentaById)
router.delete('/detalleVenta/:id',DeleteDetalleVentaById)
router.put('/detalleVenta/:id',UpdateDetalleVentaById)
export default router