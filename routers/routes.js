const router=require("express").Router()
const {login_control,register_control}=require("../controllers/controllers")
router.post("/login",login_control)
router.post("/register",register_control)
module.exports=router