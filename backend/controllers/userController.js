const asyncHandler = require('express-async-handler')
//description:register a new user

const registerUser = asyncHandler(async(req, res)=>{
    const{name, email, password} = req.body
    if(!name||!email||!password){
      return  res.status(400).json({message:'Please include all fields'})
        throw new Error('Please include all fields')
    }
})
//login user
const loginUser = asyncHandler(async(req, res)=>{
    res.send('Login Route')
})

module.exports = {
    registerUser,
    loginUser
}