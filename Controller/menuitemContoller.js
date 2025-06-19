const Items=require('../Models/MenuItems')
const Menu=require('../Models/Menu')





exports.Additems=async(req,res)=>{
    try{
        const {id:menuId}=req.params
        console.log(req.params);
        
        const {ItemName,Description,Price}=req.body
         console.log(req.body)

         const menu=await Menu.findById(menuId)
         if(!menu){
             return res.status(405).json({message:"menu not founded"})
         }

         const Newitem=new Items({
            menu:menuId,
            ItemName,
            Description,
            Price
         })

         await Newitem.save()

         res.status(201).json({message: 'Menu item created', item: Newitem })
    }catch(error){
        console.log(error)
                  res.status(500).json({error:"internal server error"})
    }
}



exports.Getitems=async(req,res)=>{
    try{
        const {id}=req.params
        console.log(req.params)
         const menu=await Menu.findById(id)
         if(!menu){
             return res.status(405).json({message:"menu not founded"})
         }
        const getitem=await Items.find({menu:id})
         console.log(getitem)
        return res.status(201).json({description: menu.Description,getitem:getitem})
       
        
    }catch(error){
        console.log(error)
           res.status(500).json({error:"internal server error"})
    }
}