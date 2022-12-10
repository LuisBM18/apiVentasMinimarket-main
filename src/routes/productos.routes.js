import { Router } from "express";
import {getProductos,postProducto,getProductoById,DeleteProductoById,UpdateProductoById} from '../controllers/productos.controller'

const router = Router()

router.get('/productos', getProductos);
router.post('/productos',postProducto)
router.get('/productos/:id',getProductoById)
router.delete('/productos/:id',DeleteProductoById)
router.put('/productos/:id',UpdateProductoById)
export default router