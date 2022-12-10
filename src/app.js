import express  from "express"
import config from "./config"

import clienteRoutes from './routes/clientes.routes'
import productosRoutes from './routes/productos.routes'
import trabajadoresRoutes from './routes/trabajador.routes'
import ventaRoutes from './routes/venta.routes'
import detalleProductoRoutes from './routes/detalleProducto.routes'
import detalleVentaRoutes from './routes/detalleVenta.routes'
import loginRoutes from './routes/login.routes'

const cors = require('cors')
const app = express()

app.use(cors())
app.set('port',config.port || 3000)

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(clienteRoutes)
app.use(productosRoutes)
app.use(trabajadoresRoutes)
app.use(ventaRoutes)
app.use(detalleProductoRoutes)
app.use(detalleVentaRoutes)
app.use(loginRoutes)

export default app