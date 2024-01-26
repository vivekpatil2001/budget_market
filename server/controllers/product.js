import Product from "../models/Product.js";

const allProducts = async(req, res) => {

    const products = await Product.find();

    try {
        res.json({
            success: true,
            data: products,
            message: "product fetch succesfully"
        })
    }catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
};

const postProducts = async (req, res) => {
    const { name, description, price, image, category, brand } = req.body;

    const products = new Product({
        name: name,
        description: description,
        price: price,
        image: image,
        category: category,
        brand: brand
    })

    try {
        const savedproducts = await products.save();

        res.json({
            success: true,
            data: savedproducts,
            message: "product saved successfully"
        })
    } catch (err) {
        return response.json({
            success: false,
            message: err.message
        })
    }

};

const findProduct =  async (req, res) => {
    const { _id } = req.params;

    try {
        const product = await Product.findOne({ _id: _id });

        res.json({
            success: true,
            data: product,
            message: "product find successfully"
        })
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        })
    }
};

const deleteOneProduct = async (req, res) => {
    const { _id } = req.params;

    await Product.deleteOne({ _id: _id });

    res.json({
        success: true,
        data: {},
        message: "Product Delete Succesfully"
    })

};

const updateOneProduct = async (req, res) => {
    const { _id } = req.params;

    const { name,
        description,
        price,
        image,
        category,
        brand } = req.body;

    const product = await Product.updateOne
        (
            { _id: _id },
            {
                $set: {
                    name,
                    description,
                    price,
                    image,
                    category,
                    brand
                }
            }
        )

    try {
        const updatedproduct = await product.findOne({ _id: _id })

        res.json({
            success: true,
            data: updatedproduct,
            message: "Product Upadeted Succefully"
        })

    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })

    }

};

const searchProducts = async (req, res) => {
    const { q } = req.query;
    try {

        const products = await Product.find({ name: { $regex: q, $option: "i" } })

        res.json({
            success: true,
            data: products,
            message: "Product searched"
        })
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }

};

export {allProducts, postProducts, findProduct, deleteOneProduct, updateOneProduct, searchProducts}