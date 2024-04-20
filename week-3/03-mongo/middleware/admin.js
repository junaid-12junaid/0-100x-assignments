// Middleware for handling auth
let {Admin}=require("../db/index")
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    let {username,password}=req.headers

    let userFound=await Admin.findOne({
        username,password
    })

    if(userFound){
        next()
    }else{
       return res.status(403).json({
        msg:"Admin does't exist"
       })
    }

}

module.exports = adminMiddleware;