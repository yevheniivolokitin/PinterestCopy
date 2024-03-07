import jwt from "jsonwebtoken"

export const checkAuth = (res,req,next) =>{
    const token = (req.headers.authorization || '').replace(/Bearer\s?/,'')
    if(token){
        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.userId = decoded.id
            next()
        } catch (error) {
            return res.json({message:"Нету доступа"})
        }
    }else{
        return res.json({message:"Нету доступа"})
    }
}