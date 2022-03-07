const cartModel=require('../models/cart')
const productModel=require('../models/product')


const checkOut= async function(req,res){
    try{
        let userId=req.params.id;
        let cartItems=await cartModel.find({user:userId});
        let totalAmount=0;

        for(let i=0;i<cartItems.length;i++){
            console.log("-",cartItems[i].items.productId);
            let data=cartItems[i].items;
            for(let j=0;j<data.length;j++){
            let product=await productModel.findOne({productId:data[j].productId});
            if(product!=null){
            totalAmount+=product.price*data[j].quantity;
            }
        }
        }

        res.json({
            message:"Successful",
            amount:totalAmount
        });
    
    }catch(err){
        res.json({
            message:err.message
        })
    }
}
module.exports=checkOut;