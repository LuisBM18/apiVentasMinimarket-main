import {getConnection,sql} from '../database/connection'
export const getProductos =async (req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from TProducto')
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}  

export const postProducto = async (req,res) => {
    const {CodProducto,NomProducto,Descripcion,Imagen,Categoria} = req.body
    try {
        const pool = await getConnection()
    await pool
        .request()
        .input('CodProducto',sql.VarChar,CodProducto)
        .input('NomProducto',sql.VarChar,NomProducto)
        .input('Descripcion',sql.VarChar,Descripcion)
        .input('Imagen',sql.VarChar,Imagen)
        .input('Categoria',sql.VarChar,Categoria)
        .query('insert into TProducto (CodProducto,NomProducto,Descripcion,Imagen,Categoria) Values(@CodProducto,@NomProducto,@Descripcion,@Imagen,@Categoria)')
        res.json({CodProducto,NomProducto})
    } catch (error) {
        res.status(500)
        res.json("error")
    }
}
export const getProductoById = async (req,res) => {
    try {
        const {id} = req.params
         const pool = await getConnection()
        const result = await pool.request()
        .input('id',sql.VarChar,id)
        .query('select * from TProducto where CodProducto =@id')
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
    
}

export const DeleteProductoById = async (req,res) => {
    try {
        const {id} = req.params 
        const pool = await getConnection()
        await pool.request()
        .input('id',sql.VarChar,id)
        .query('delete from TProducto where CodProducto =@id')
        res.json("se elimino")
    } catch (error) {
        res.json("error")
    }
}

export const UpdateProductoById = async (req,res) => {
    const {NomProducto,Descripcion,Imagen,Categoria} = req.body
    const {id} = req.params
    try {
        const pool = await getConnection()
        await pool
        .request()
        .input('CodProducto',sql.VarChar,id)
        .input('NomProducto',sql.VarChar,NomProducto)
        .input('Descripcion',sql.VarChar,Descripcion)
        .input('Imagen',sql.VarChar,Imagen)
        .input('Categoria',sql.VarChar,Categoria)
        .query('update TProducto set CodProducto = @CodProducto,NomProducto = @NomProducto,Descripcion = @Descripcion,Imagen = @Imagen,Categoria = @Categoria where CodProducto = @CodProducto')
        res.json('Producto actualizado')
    } catch (error) {
        res.status(500)
        res.json("error")
    }
}