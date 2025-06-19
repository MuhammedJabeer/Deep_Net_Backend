const menu=require("../Models/Menu")




exports.Addmenu=async(req,res)=>{
    try{
        const {name,Description}=req.body
        console.log(req.body)
        if(!name||!Description){
            return res.status(404).json({message:"item not founded"}
            )
        }
 
        let existingMenu = await menu.findOne({name: { $regex: new RegExp(`^${name}$`, 'i')}});

      if (existingMenu) {
      return res.status(200).json( existingMenu );
    }


        const Newmenu=await menu.create({name,Description})

        return res.status(201).json(Newmenu)
    }catch(error){
        res.status(500).json({error:"internal server error"})
    }
}

exports.Getmenu=async(req,res)=>{
    try{
        const getmenu=await menu.find()
         return res.status(201).json({getmenu})
    }catch(error){
        res.status(500).json({error:"internal server error"})
    }
}