const {Product} = require("../models/Product");

const createProduct = async (req, res) => {
    try {
        const payload = req.body;
        console.log(payload)
        const product = new Product(payload);
        await product.save();
        res.json({msg: "OK", product: product})
    } 
    catch (err){
        console.error(err);
        res.json({error:err})
    }
};

module.exports = {createProduct};