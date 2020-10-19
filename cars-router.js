const express = require("express");

//!! Don't 100% understand require
const db = require("./data/config");

const router = express.Router();

//!! Still don't really get 'next'
router.get("/cars", async (req, res, next) => {
    
    try{
        res.json(await db("cars"))
    } catch(err) {
        next (err);
    }
    
})

router.post("/cars", async (req, res, next) => {
    //Vin, make, model, and mileage
    try {
        //Is the returning the id automatic for all db?
        const [id] = await db("cars").insert(req.body);

        //I believe this pulls it out after you put it in
        //Not sure about first. First object with ID?
        const newCar = await db("cars").where({id}).first();

        res.status(201).json(newCar);
    

    } catch(err) {
        next(err);
    }


})


module.exports = router;