import {getConnection,sql} from '../database/connection'
export const getTrabajador =async (req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from TTrabajador')
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.json("error")
    }
}  

export const postTrabajador= async (req,res) => {
    const {CodTrabajador,NomT,Apellidos,Sexo,FechaNacimientoT,TipoDocT,NumDocT,DireccionT,TelefonoT,EmailTrabajador,Usuario,Contrasenia} = req.body
    try {
        const pool = await getConnection()
    await pool
        .request()
        .input('CodTrabajador',sql.VarChar,CodTrabajador)
        .input('NomT',sql.VarChar,NomT)
        .input('Apellidos',sql.VarChar,Apellidos)
        .input('Sexo',sql.VarChar,Sexo)
        .input('FechaNacimientoT',sql.Date,FechaNacimientoT)
        .input('TipoDocT',sql.VarChar,TipoDocT)
        .input('NumDocT',sql.VarChar,NumDocT)
        .input('DireccionT',sql.VarChar,DireccionT)
        .input('TelefonoT',sql.VarChar,TelefonoT)
        .input('EmailTrabajador',sql.VarChar,EmailTrabajador)
        .input('Usuario',sql.VarChar,Usuario)
        .input('Contrasenia',sql.VarChar,Contrasenia)
        .query('insert into TTrabajador (CodTrabajador,NomT,Apellidos,Sexo,FechaNacimientoT,TipoDocT,NumDocT,DireccionT,TelefonoT,EmailTrabajador,Usuario,Contrasenia) Values(@CodTrabajador,@NomT,@Apellidos,@Sexo,@FechaNacimientoT,@TipoDocT,@NumDocT,@DireccionT,@TelefonoT,@EmailTrabajador,@Usuario,@Contrasenia)')
        res.json({CodTrabajador,NomT})
    } catch (error) {
        res.status(500)
        res.json("error")
    }
}
export const getTrabajadorById = async (req,res) => {
    try {
        const {id} = req.params
        const pool = await getConnection()
        const result = await pool.request()
        .input('id',sql.VarChar,id)
        .query('select * from TTrabajador where CodTrabajador =@id')
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}

export const DeleteTrabajadorById = async (req,res) => {
    try {
        const {id} = req.params 
        const pool = await getConnection()
        await pool.request()
        .input('id',sql.VarChar,id)
        .query('delete from TTrabajador where CodTrabajador =@id')
        res.json("se elimino")
    } catch (error) {
        res.json("error")
    }
}

export const UpdateTrabajadorById = async (req,res) => {
    const {NomT,Apellidos,Sexo,FechaNacimientoT,TipoDocT,NumDocT,DireccionT,TelefonoT,EmailTrabajador,Usuario,Contrasenia} = req.body
    const {id} = req.params
    try {
        const pool = await getConnection()
        await pool
        .request()
        .input('CodTrabajador',sql.VarChar,id)
        .input('NomT',sql.VarChar,NomT)
        .input('Apellidos',sql.VarChar,Apellidos)
        .input('Sexo',sql.VarChar,Sexo)
        .input('FechaNacimientoT',sql.Date,FechaNacimientoT)
        .input('TipoDocT',sql.VarChar,TipoDocT)
        .input('NumDocT',sql.VarChar,NumDocT)
        .input('DireccionT',sql.VarChar,DireccionT)
        .input('TelefonoT',sql.VarChar,TelefonoT)
        .input('EmailTrabajador',sql.VarChar,EmailTrabajador)
        .input('Usuario',sql.VarChar,Usuario)
        .input('Contrasenia',sql.VarChar,Contrasenia)
        .query('update TTrabajador set CodTrabajador = @CodTrabajador,NomT=@Nomt,Apellidos=@Apellidos,Sexo=@Sexo,FechaNacimientoT=@FechaNacimientoT,TipoDocT=@TipoDocT,NumDocT=@NumDocT,DireccionT=@DireccionT,TelefonoT=@TelefonoT,EmailTrabajador=@EmailTrabajador,Usuario=@Usuario,Contrasenia=@Contrasenia where CodTrabajador = @CodTrabajador')
        res.json('Trabajador actualizado')
    } catch (error) {
        res.status(500)
        res.json(error.message)
    }
}