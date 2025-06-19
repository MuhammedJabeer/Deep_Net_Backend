    const mongoose=require('mongoose')
    const Menu = require('./Menu')


    const menuItemSchema=new mongoose.Schema({
        menu:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Menu",
            required: true
        },
        ItemName:{
            type:String,
            require:true
        },
        Description:{
            type:String,
            require:true
        },
        Price:{
            type:Number,
            require:true
        }
    })


module.exports=mongoose.model("MenuItem",menuItemSchema)

