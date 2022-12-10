import {getConnection,sql} from '../database/connection'
export const postLoginUser= async (req,res) => {
    const {user,password} = req.body
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .input('user',sql.VarChar,user)
        .input('contrasenia',sql.VarChar,password)
        .query('select Usuario,Contrasenia from TTrabajador where Usuario = @user and Contrasenia = @contrasenia')
        if(result.rowsAffected == 0){
            res.json("error")
        }else{
            const rpta = {
                datos: result.recordset,
                token: '12345678'
            }
            //const {Usuario} = rpta.datos[0]
            //console.log(Usuario)
            res.json(rpta)
        }
    } catch (error) {
        res.status(500)
        res.json(error.message)
    }
}