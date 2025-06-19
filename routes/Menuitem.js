var express = require('express');
var router = express.Router();
const menuItemcontroller=require('../Controller/menuitemContoller')





router.post("/:id/items",menuItemcontroller.Additems)
router.get('/:id/items',menuItemcontroller.Getitems)

module.exports = router;
