const mongoose=require('mongoose')
require('dotenv').config()


const ConnectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Db connected ")
    }catch(error){
        console.log(error)
    }
}



module.exports=ConnectDb