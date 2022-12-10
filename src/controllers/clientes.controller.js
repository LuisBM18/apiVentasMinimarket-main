import {getConnection,sql} from '../database/connection'
export const getClientes =async (req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('select * from TCliente')
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.json("error")
    }
}  

export const postCliente = async (req,res) => {
    const {CodCliente,NomCliente,ApellidosCliente,SexoCliente,FechaNacimientoCliente,TipoDocCliente,NumDocCliente,DireccionCliente,TelefonoCliente,EmailCliente} = req.body
    try {
        const pool = await getConnection()
        await pool
        .request()
        .input('CodCliente',sql.VarChar,CodCliente)
        .input('NomCliente',sql.VarChar,NomCliente)
        .input('ApellidosCliente',sql.VarChar,ApellidosCliente)
        .input('SexoCliente',sql.VarChar,SexoCliente)
        .input('FechaNacimientoCliente',sql.Date,FechaNacimientoCliente)
        .input('TipoDocCliente',sql.VarChar,TipoDocCliente)
        .input('NumDocCliente',sql.VarChar,NumDocCliente)
        .input('DireccionCliente',sql.VarChar,DireccionCliente)
        .input('TelefonoCliente',sql.VarChar,TelefonoCliente)
        .input('EmailCliente',sql.VarChar,EmailCliente)
        .query('insert into TCliente (CodCliente,NomCliente,ApellidosCliente,SexoCliente,FechaNacimientoCliente,TipoDocCliente,NumDocCliente,DireccionCliente,TelefonoCliente,EmailCliente) Values(@CodCliente,@NomCliente,@ApellidosCliente,@SexoCliente,@FechaNacimientoCliente,@TipoDocCliente,@NumDocCliente,@DireccionCliente,@TelefonoCliente,@EmailCliente)')
        res.json({CodCliente,NomCliente})
    } catch (error) {
        
        res.json(error.message)
    }
}
export const getClienteById = async (req,res) => {
    try {
        const {id} = req.params
        const pool = await getConnection()
        const result = await pool.request()
        .input('id',sql.VarChar,id)
        .query('select * from TCliente where CodCliente =@id')
        res.json(result.recordset)
    } catch (error) {
        res.json("error")
    }
}

export const DeleteClienteById = async (req,res) => {
    try {
        const {id} = req.params 
        const pool = await getConnection()
        await pool.request()
        .input('id',sql.VarChar,id)
        .query('delete from TCliente where CodCliente =@id')
        res.json("se elimino cliente")
    } catch (error) {
        res.json("error")
    }
}

export const UpdateClienteById = async (req,res) => {
    const {NomCliente,ApellidosCliente,SexoCliente,FechaNacimientoCliente,TipoDocCliente,NumDocCliente,DireccionCliente,TelefonoCliente,EmailCliente} = req.body
    const {id} = req.params
    try {
        const pool = await getConnection()
        await pool
        .request()
        .input('CodCliente',sql.VarChar,id)
        .input('NomCliente',sql.VarChar,NomCliente)
        .input('ApellidosCliente',sql.VarChar,ApellidosCliente)
        .input('SexoCliente',sql.VarChar,SexoCliente)
        .input('FechaNacimientoCliente',sql.Date,FechaNacimientoCliente)
        .input('TipoDocCliente',sql.VarChar,TipoDocCliente)
        .input('NumDocCliente',sql.VarChar,NumDocCliente)
        .input('DireccionCliente',sql.VarChar,DireccionCliente)
        .input('TelefonoCliente',sql.VarChar,TelefonoCliente)
        .input('EmailCliente',sql.VarChar,EmailCliente)
        .query('update TCliente set NomCliente = @Nomcliente,ApellidosCliente = @ApellidosCliente, SexoCliente = @SexoCliente,FechaNacimientoCliente = @FechaNacimientoCliente,TipoDocCliente = @TipoDocCliente,NumDocCliente=@NumDocCliente,DireccionCliente=@DireccionCliente,TelefonoCliente=@TelefonoCliente,EmailCliente=@EmailCliente where CodCliente = @CodCliente')
        res.json('Cliente actualizado')
    } catch (error) {
        res.status(500)
        res.json("error")
    }
}