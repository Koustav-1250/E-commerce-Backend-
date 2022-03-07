
require("dotenv").config();
const mongoose=require('mongoose');
const db_link=process.env.DB;


mongoose.connect(db_link)
.then(function(db){
    console.log('cart db connected');
})
.catch(function(err){    
    console.log(err);
})

const cartSchema=new mongoose.Schema({
    product:{
        type:String
    },
    quantity:{
        type:Number
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    },
    items:[{
        productId:{
            type:String
        },
        quantity:{
            type:Number,
            default:1
        }
    }]
})

const cartModel=new mongoose.model('cartModel',cartSchema);

module.exports=cartModel;