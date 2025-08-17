const jwt = require("jsonwebtoken")

const authmiddleWare = (req,res,next)=>{

    let token = req.headers?.authorization?.split(" ")[2]
    if(token){
        var decoded = jwt.verify(token, process.env.JWT_SECTRET)
        console.log(decoded)
        console.log('passed through auth middleware')
        next()
    }else{
        res.status(404).json({msg:"UnAuthraized"})
    }
    
}


module.exports = authmiddleWare