const express = require('express');
const router = express.Router();
const Orders = require('../models/OrdersModels');

router.get('/count',async(req,res)=>{
    try {
         const count = await Orders.countDocuments()
         return res.status(200).json({count:count})
    } catch (error) {
        return res.status(500).json({ message: error.message }) 
    }
})

// GET all orders
router.get('/all', async (req, res) => {
    try {
        const orders = await Orders.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST new order
router.post('/', async (req, res) => {
    try {
        const { userID, phone, price, email, orderDate, shippingDate } = req.body;

        // Check if any required field is missing
        if (!userID || !phone || !price || !email || !orderDate || !shippingDate) {
            return res.status(400).json({ message: "All fields required" }); // 400 Bad Request
        }

        // Create and save the new order
        const orderData = new Orders(req.body);
        const storeData = await orderData.save();
        res.status(201).json(storeData); // 201 Created
    } catch (error) {
        res.status(500).json({ error: error.message }); // 500 Internal Server Error
    }
});

// PUT update order by ID
router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const existingOrder = await Orders.findOne({ _id: id });

        if (!existingOrder) {
            return res.status(404).json({ message: "Order not found" }); // 404 Not Found
        }

        // Update the order and return the updated order
        const updateOrder = await Orders.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updateOrder); // 200 OK
    } catch (error) {
        res.status(500).json({ error: error.message }); // 500 Internal Server Error
    }
});

// DELETE order by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const existingOrder = await Orders.findOne({ _id: id });

        if (!existingOrder) {
            return res.status(404).json({ message: "Order not found" }); // 404 Not Found
        }

        // Delete the order and return confirmation
        await Orders.findByIdAndDelete(id);
        res.status(200).json({ message: "Order deleted", order: existingOrder }); // 200 OK
    } catch (error) {
        res.status(500).json({ error: error.message }); // 500 Internal Server Error
    }
});

module.exports = router;
