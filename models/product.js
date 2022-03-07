
require("dotenv").config();
const mongoose=require('mongoose');
const db_link=process.env.DB;


mongoose.connect(db_link)
.then(function(db){
    console.log('product db connected');
})
.catch(function(err){    
    console.log(err);
})

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        unique:true
    },
    description:{
        type:String
    },
    price:{
        type:Number
    }
});

const productModel=mongoose.model('productModel',productSchema);
module.exports=productModel;