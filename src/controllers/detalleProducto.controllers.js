import {getConnection,sql} from '../database/connection'
export const getDetalleProducto =async (req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from TDetalleProducto')
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}  

export const postDetalleProducto = async (req,res) => {
    const {CodDetalleProducto,CodProducto,PrecioCompra,PrecioVenta,Stock} = req.body
    try {
        const pool = await getConnection()
    await pool
        .request()
        .input('CodDetalleProducto',sql.VarChar,CodDetalleProducto)
        .input('CodProducto',sql.VarChar,CodProducto)
        .input('PrecioCompra',sql.Numeric,PrecioCompra)
        .input('PrecioVenta',sql.Numeric,PrecioVenta)
        .input('Stock',sql.Int,Stock)
        .query('insert into TDetalleProducto (CodDetalleProducto,CodProducto,PrecioCompra,PrecioVenta,Stock) Values(@CodDetalleProducto,@CodProducto,@PrecioCompra,@PrecioVenta,@Stock)')
        res.json({CodDetalleProducto,CodProducto})
    } catch (error) {
        res.json("error")
    }
}
export const getDetalleProductoById = async (req,res) => {
    try {
        const {id} = req.params
        const pool = await getConnection()
        const result = await pool.request()
        .input('id',sql.VarChar,id)
        .query('select * from TDetalleProducto where CodDetalleProducto =@id')
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}

export const DeleteDetalleProductoById = async (req,res) => {
    try {
        const {id} = req.params 
        const pool = await getConnection()
        await pool.request()
          .input('id',sql.VarChar,id)
           .query('delete from TDetalleProducto where CodDetalleProducto =@id')
           res.json("se elimino")
    } catch (error) {
        res.json("error")
    }
}

export const UpdateDetalleProductoById = async (req,res) => {
    const {CodProducto,PrecioCompra,PrecioVenta,Stock} = req.body
    const {id} = req.params
    try {
        const pool = await getConnection()
        await pool
        .request()
        .input('CodDetalleProducto',sql.VarChar,id)
        .input('CodProducto',sql.VarChar,CodProducto)
        .input('PrecioCompra',sql.Numeric,PrecioCompra)
        .input('PrecioVenta',sql.Numeric,PrecioVenta)
        .input('Stock',sql.Int,Stock)
        .query('update TDetalleProducto set CodProducto = @CodProducto,PrecioCompra=@PrecioCompra,PrecioVenta=@PrecioVenta,Stock=@Stock where CodDetalleProducto= @CodDetalleProducto')
        res.json('Detalle Producto actualizado')
    } catch (error) {
        res.json("error")
    }
}