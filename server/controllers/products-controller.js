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

const get = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch(err) {
        console.error(err)
        res.json.status(500).json({error: `Internal error: ${err}`})
    }
}

const getAll = async (req, res) => {
    try {
        const products = await Product.find({deleted_at: null})
        res.status(200).json(products)
    } catch(err) {
        console.error(err)
        res.json.status(500).json({error: `Internal error: ${err}`})
    }
};

module.exports = {createProduct, get, getAll};