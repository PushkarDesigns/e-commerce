import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  offerPrice: {
    type: Number,
    require: true,
  },
  image: {
    type: Array,
    require: true,
  },
  category: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;

// This code defines a Mongoose schema for a product model in a MongoDB da
