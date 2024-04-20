
let {User}=require("../db/index")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    let {username,password}=req.headers

    let userFound=await User.findOne({
        username,password
    })

    if(userFound){
        next()
    }else{
       return res.status(403).json({
        msg:"User does't exist"
       })
    }
}

module.exports = userMiddleware;