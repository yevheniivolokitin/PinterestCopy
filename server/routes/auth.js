import { Router,  } from "express"
import { register,login,getMe } from "../controller/auth.js"
import { checkAuth } from "../utils/checkAuth.js"
const router = new Router()

//register
//http://localhost:3002/register
router.post('/register',register)
//login
//http://localhost:3002/login
router.post('/login',login)
//get me
//http://localhost:3002/getme
router.get('/me',checkAuth,getMe)

export default router