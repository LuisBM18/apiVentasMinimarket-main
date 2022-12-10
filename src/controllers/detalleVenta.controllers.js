import {getConnection,sql} from '../database/connection'
export const getDetalleVenta =async (req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from TDetalleVenta')
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.json(error.message)
    }
}  

export const postDetalleVenta = async (req,res) => {
    const {CodDetalleVenta,CodVenta,CodDetalleProducto,Cantidad,PrecioVenta,Descuento} = req.body
    try {
        const pool = await getConnection()
    await pool
        .request()
        .input('CodDetalleVenta',sql.VarChar,CodDetalleVenta)
        .input('CodVenta',sql.VarChar,CodVenta)
        .input('CodDetalleProducto',sql.VarChar,CodDetalleProducto)
        .input('Cantidad',sql.Int,Cantidad)
        .input('PrecioVenta',sql.Numeric,PrecioVenta)
        .input('Descuento',sql.Numeric,Descuento)
        .query('insert into TDetalleVenta (CodDetalleVenta,CodVenta,CodDetalleProducto,Cantidad,PrecioVenta,Descuento) Values(@CodDetalleVenta,@CodVenta,@CodDetalleProducto,@Cantidad,@PrecioVenta,@Descuento)')
        res.json({CodDetalleVenta,CodVenta})
    } catch (error) {
        res.json("error")
    }
}
export const getDetalleVentaById = async (req,res) => {
    try {
        const {id} = req.params
        const pool = await getConnection()
        const result = await pool.request()
        .input('id',sql.VarChar,id)
        .query('select * from TDetalleVenta where CodDetalleVenta =@id')
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}

export const DeleteDetalleVentaById = async (req,res) => {
    try {
        const {id} = req.params 
        const pool = await getConnection()
        await pool.request()
        .input('id',sql.VarChar,id)
        .query('delete from TDetalleVenta where CodDetalleVenta =@id')
        res.json("se elimino")
    } catch (error) {
        res.json("error")
    }
}

export const UpdateDetalleVentaById = async (req,res) => {
    const {CodVenta,CodDetalleProducto,Cantidad,PrecioVenta,Descuento} = req.body
    const {id} = req.params
    try {
        const pool = await getConnection()
        await pool
        .request()
        .input('CodDetalleVenta',sql.VarChar,id)
        .input('CodVenta',sql.VarChar,CodVenta)
        .input('CodDetalleProducto',sql.VarChar,CodDetalleProducto)
        .input('Cantidad',sql.Int,Cantidad)
        .input('PrecioVenta',sql.Numeric,PrecioVenta)
        .input('Descuento',sql.Numeric,Descuento)
        .query('update TDetalleVenta set CodVenta = @CodVenta,CodDetalleProducto = @CodDetalleProducto,Cantidad = @Cantidad,PrecioVenta = @PrecioVenta,Descuento = @Descuento where CodDetalleVenta = @CodDetalleVenta')
        res.json('Detalle venta actualizado')
    } catch (error) {
        res.json("error")
    }
}