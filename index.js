const express=require('express');
const app=express();
const port=3000;
const route=require('./router/userRoute');
const connection=require('./connection');
const mid=require('./middlewere/mis');
const path=require('path');
const User = require('./model/user');
const staticRouter=require('./router/staticRoute');

app.use(express.json());


app.use(mid);

connection();
app.use("/",staticRouter);
app.use("/url",route);


app.set('view engine','ejs');
app.set("views",path.resolve("./views"));
app.get("/test",async (req,res)=>{
    const allu=await User.find({});
   
    return res.render("home",{
        data:allu
    });
});










app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});