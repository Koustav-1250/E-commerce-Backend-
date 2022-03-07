const express=require('express');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');



//fetch the routes
const userRouter=require('./routes/user');
const productRouter=require('./routes/product');
const cartRouter=require('./routes/cart');
const checkoutRouter = require('./routes/checkout');


const app=express();

// middlewares
app.use(cookieParser()); 
// app.use(express.static(__dirname+'E-commerce/public'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//base route, which router to use
app.use('/user',userRouter);
app.use('/product',productRouter);
app.use('/cart',cartRouter);
app.use('/checkOut',checkoutRouter)









app.listen(3000,function(){
    console.log("server started");
})