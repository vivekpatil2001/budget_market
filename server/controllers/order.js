import Order from "../models/Order.js";

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();

        res.json({
            success: true,
            data: orders,
            message: "Ordere Fetch Successfully"
        })
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
};

const postOrders = async (req, res) => {
    const { user, product, quantity, status, shipingAddress, deliveryCharges } = req.body;

    const order = new Order({
        user,
        product,
        quantity,
        status,
        shipingAddress,
        deliveryCharges
    })
    try {
        const saveOrder = await order.save();

        res.json({
            success: true,
            data: saveOrder,
            message: "order fetch succesfully"
        })
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
};

const fetchOrder =  async (req, res) => {
    const { _id } = req.params;

    try {
        const order = await Order.find({ _id: _id }).populate("user products")

        order.user.password = undefined;

        res.json({
            success: true,
            data: order,
            message: "order Find Successfully"
        })
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
};

export {getOrders, postOrders, fetchOrder}