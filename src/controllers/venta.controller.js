import {getConnection,sql} from '../database/connection'
export const getVenta =async (req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from TVenta')
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}  

export const postVenta = async (req,res) => {
    const {CodVenta,CodCliente,CodTrabajador,Fecha,TipoComprobante} = req.body
    try {
        const pool = await getConnection()
    await pool
        .request()
        .input('CodVenta',sql.VarChar,CodVenta)
        .input('CodCliente',sql.VarChar,CodCliente)
        .input('CodTrabajador',sql.VarChar,CodTrabajador)
        .input('Fecha',sql.VarChar,Fecha)
        .input('TipoComprobante',sql.VarChar,TipoComprobante)
        .query('insert into TVenta (CodVenta,CodCliente,CodTrabajador,Fecha,TipoComprobante) Values(@CodVenta,@CodCliente,@CodTrabajador,@Fecha,@TipoComprobante)')
        res.json({CodVenta,CodCliente})
    } catch (error) {
        res.json("error")
    }
}
export const getVentaById = async (req,res) => {
    try {
        const {id} = req.params
        const pool = await getConnection()
        const result = await pool.request()
        .input('id',sql.VarChar,id)
        .query('select * from TVenta where CodVenta =@id')
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}

export const DeleteVentaById = async (req,res) => {
    try {
        const {id} = req.params 
        const pool = await getConnection()
        await pool.request()
        .input('id',sql.VarChar,id)
        .query('delete from TVenta where CodVenta =@id')
        res.json("se elimino")
    } catch (error) {
        res.json("error")
    }
}

export const UpdateVentaById = async (req,res) => {
    const {CodCliente,CodTrabajador,Fecha,TipoComprobante} = req.body
    const {id} = req.params
    try {
        const pool = await getConnection()
        await pool
        .request()
        .input('CodVenta',sql.VarChar,id)
        .input('CodCliente',sql.VarChar,CodCliente)
        .input('CodTrabajador',sql.VarChar,CodTrabajador)
        .input('Fecha',sql.VarChar,Fecha)
        .input('TipoComprobante',sql.VarChar,TipoComprobante)
        .query('update TVenta set CodVenta = @CodVenta,CodCliente=@CodCliente,CodTrabajador=@CodTrabajador,Fecha=@Fecha,TipoComprobante=@TipoComprobante where CodVenta= @CodVenta')
        res.json('Venta actualizado')
    } catch (error) {
        res.json("error")
    }
}