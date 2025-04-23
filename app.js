const express =require("express")
const app=express()
require("dotenv/config")
const port=process.env.port
const router=require("./routers")
app.use(express.json({linit:"50mb",extended:true,parameterLimit:500000}))
app.use("/api",router)

app.listen(port,()=>{
    console.log("Sunucu 5000 portunda çalışıyor")
})

