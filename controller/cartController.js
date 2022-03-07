const cartModel=require('../models/cart')

const addToCart=async function(req,res){
    try{
        let item=req.body;
        let product_id=req.params.productId;
        let savedCart=await cartModel.create(item);
        let items=savedCart.items;
        let newProduct={
            productId:product_id,
            quantity:item.quantity
        }
        items.push(newProduct);
        console.log(items,product_id);
        savedCart.items=items;
        console.log(savedCart.items);
        let newCart=  await  savedCart.save();
        res.json({
            message:"added to Cart",
            data:newCart
        })
    }catch(err){
        res.json({
            message:err.message
        })
    }
}

const getAllItems=async function(req,res){
    try{
        let allItems=await cartModel.find();
        res.json({
            message:"successfull",
            data:allItems
        })

    }
    catch(err){
        res.json({
            message:err.message
        })
    }
}
const Cart_Controller={addToCart,getAllItems};

module.exports=Cart_Controller;