const productModel=require('../models/product');


const addProduct=async function(req,res){
    try{
        let product=req.body;
        console.log(product);
        if(product!=null){
            let savedProduct=await productModel.create(product);
            res.json({
                message:"Product added to the database",
                data:product
            })
        }else{
            res.json({
                message:"Invalid input"
            })
        }
    }catch(err){
        res.json({
            message:err.message
        })
    }
}


const getAllProduct=async function(req,res){
    try{
        let products=await productModel.find();
        if(products!=null){
            res.json({
                message:"successfull",
                data:products
            })
        }
    }catch(err){
        res.json({
            message:"server error"
        })
    }
}

const Product_Controller={addProduct,getAllProduct}
module.exports=Product_Controller;