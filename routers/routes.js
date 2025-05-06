const router=require("express").Router()
const {login_control,register_control,kullanici_getir}=require("../controllers/controllers")
router.post("/login",login_control)
router.post("/register",register_control)
router.get("/kullanici_getir",kullanici_getir)
module.exports=router