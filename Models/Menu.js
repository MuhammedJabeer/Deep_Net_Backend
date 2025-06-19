const mongoose=require('mongoose')




const Menuschema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    Description:{
        type:String,
        require:true
    }  
})


module.exports=mongoose.model("Menu",Menuschema)