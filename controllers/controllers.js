const dbConn=require("../db/mysql_connect")
const bcrypt =require("bcrypt")
const login_control=async(req,res)=>{
    console.log(req.body)
    return res.json(req.body)
}
const register_control=async(req,res)=>{
    try{
        const name=req.body.name
        const password=await bcrypt.hash(req.body.password,10)
        const [existingUsers]=await dbConn.query("SELECT * FROM users WHERE name=?",[name]);
        if(existingUsers.length>0){
            return res.status(409).json({
                success:false,
                message:"Kayıt Mevcut"
            })
        }

        const [insertResult]=await dbConn.query("INSERT INTO users (name,password) VALUES (?,?)",[name,password])
        return res.status(201).json({
            success:true,
            data:req.body,
            message:"Kayıt Başarılı"
        });
    }catch(error){
        console.log("Database Error:",error)
        return res.status(500).json({
            success:false,
            data:null,
            message:"Bir hata oluştu"
        })

    }
}
module.exports={login_control,register_control}