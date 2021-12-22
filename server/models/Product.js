const {model, Schema} = require("mongoose");

const ProductSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be greater than 0"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must have at least 3 characters"]
    },
    deleted_at: Date
},{timestamps: true});

const Product = model("Product", ProductSchema);

module.exports = {Product, ProductSchema};