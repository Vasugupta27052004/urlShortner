const mongoose=require('mongoose');
const connection=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/urlShortner');
        console.log("Connected to MongoDB");
    }catch(err){
        console.log("Error connecting to MongoDB",err);
    } };
module.exports=connection;