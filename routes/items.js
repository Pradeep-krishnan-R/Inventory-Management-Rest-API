const express = require("express");
const router = express.Router();
const Item = require('../models/item');

router.post('/', async(req, res)=>{
    const itemObj = new Item({
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price
    });
    try
    {
        const i = await itemObj.save();
        res.json(i);
    }
    catch(e)
    {
        res.send(e);
    }
});

router.get('/', async (req, res) => {

    try
    {
        const item = await Item.find();
        res.json(item);
    }
    catch(e)
    {
        res.send("No Items are Stored..");
    }
    
});

router.get('/:name', async (req, res) => {

    try
    {
        const item = await Item.findOne({"name": req.params.name});
        res.json(item);
    }
    catch(e)
    {
        res.send("Invalid Name");
    }
    
});

router.patch('/:name', async(req, res) => {

    try
    {
        const item = await Item.findOne({"name": req.params.name});
        item.name = req.body.name;
        item.quantity = req.body.quantity;
        item.price = req.body.price;
        const i = await item.save();
        res.json(i);

    }
    catch(e)
    {
        res.send(e);
    }

});

router.delete('/:name', async (req, res) => {

    try {

     const item = await Item.findOne({"name": req.params.name});
     const i = await item.deleteOne();
     i.save();
     res.send("Deleted");
    } 
    catch (e) {

        res.send("No Items Found");
        
    }

    


})


module.exports = router;