import { Router } from "express";
import {getDetalleProducto,postDetalleProducto,getDetalleProductoById,DeleteDetalleProductoById,UpdateDetalleProductoById} from '../controllers/detalleProducto.controllers'

const router = Router()

router.get('/detalleProducto', getDetalleProducto);
router.post('/detalleProducto',postDetalleProducto)
router.get('/detalleProducto/:id',getDetalleProductoById)
router.delete('/detalleProducto/:id',DeleteDetalleProductoById)
router.put('/detalleProducto/:id',UpdateDetalleProductoById)
export default router