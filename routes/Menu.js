var express = require('express');
var router = express.Router();
const menucontroller=require('../Controller/MenuController')


router.post("/menu",menucontroller.Addmenu)
router.get("/menu",menucontroller.Getmenu)

module.exports = router;
