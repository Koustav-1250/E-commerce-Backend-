require("dotenv").config();
const userModel=require('../models/user');
const jwt = require('jsonwebtoken')
const JWT_KEY=process.env.JWT_KEY


const signUp=async function(req,res){
    let user=req.body;
    let data=await userModel.create(user);
    if(data!=null){
        res.json({
            message:"User signed up Successfully"
        })
    }else{
        res.statusCode(500).json({
            message:"Problem with the server"
        })
    }
}

const login=async function(req,res){
    let {userId,dateOfBirth}=req.body;
    // now we will be searching our database for that user_id
    let user=await userModel.findOne({userId});
    console.log(user);
    if(user==null){
        res.json({
            message:"User not exist"
        })
    }else{
        
        // creating JWT_ Token for cookie
           let unique_id = user['id']; // payload
           let token = jwt.sign({ payload: unique_id }, JWT_KEY);
           res.cookie('login', token, { httpOnly: true });
           res.json({
               message: "user logged in",
               data: user
           });
    }
}

const logOut=function(req,res){
    try{
    res.cookie('login'," ",{maxAge:1});
    res.json({
        message: "user logged out"
    })
    }catch(err){
    res.json({
        message:"server error"
    })
}
}
const protectRoute = async (req, res, next) =>  {
    try {
        let token;
        if (req.cookies.login) {
            token = req.cookies.login;
            let payload = jwt.verify(token, JWT_KEY);
            if (payload) {
                let user = await userModel.findById(payload.payload)
                if(!user){
                    return res.status(401).json({status:failed,message:"User not exist"});
                }
                req.role = user.role;
                req.id = user.id;
                next();
            } else {
                res.json({
                    message: 'user not verified'
                })
            }
        } else {
    
            res.json({
                message: "Please login Again"
            })
        }
    } catch (err) {
        res.json({
            message: err.message
        })
    }
}
const User_Controller={signUp,login,logOut,protectRoute};
module.exports=User_Controller;