import { Schema } from "mongoose";

const ProductSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
        },
        image: {
            type: String,
        },
        brand: {
            type: String,
        },
        title: {
            type: String,
        },
        reviewScore: {
            type: Number,
        },
    },
    { _id: false }
);

export default ProductSchema;
