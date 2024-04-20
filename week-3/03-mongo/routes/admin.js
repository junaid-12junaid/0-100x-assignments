const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

let {Admin,Course}=require("../db/index")


// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    let {username,password}=req.body

    let userFound=await Admin.findOne({
        username,password
    })

    if(userFound){
        return res.status(403).json({
            msg:"User does't exist"
           })
    }

  let adminCreated= await Admin.create({
        username,password

    })

if(adminCreated){
    return res.json({
        msg:"Admin created successfully"
       })
}

});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic

let { title, description, price, imageLink}=req.body


let createCourse=await Course.create({
    title, description, price, imageLink

})

return res.status(201).json({
    msg:"Course is created successfully",courseId:createCourse._id
   })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
  return  res.json({
        res:"hello"
    })
});

module.exports = router;