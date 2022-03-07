// first operation to connect the mongoose database.
require("dotenv").config();
const mongoose=require('mongoose');
const db_link=process.env.DB;


mongoose.connect(db_link)
.then(function(db){
    console.log('db connected');
})
.catch(function(err){    
    console.log(err);
})


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        unique:true
    },
    address:{
        type:String
    },
    dateOfBirth:{
        type:Date
    }
});

const userModel=mongoose.model('userModel',userSchema);

module.exports=userModel;