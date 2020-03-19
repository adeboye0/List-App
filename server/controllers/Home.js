const NodeGeocoder = require('node-geocoder');
const Item = require('../models/item');
const mongoose = require('mongoose');


module.exports = {

    index: function (req, res) {
        Item.find().sort({ createdAt: -1 }).then(listing => res.json(listing));
    },

    add: async function (req, res) {
        const newItem = new Item({
            name: req.body.name
        });

        try {
            const item = await newItem.save();
            if (!item) throw Error('Error Occured');

            res.status(200).json(item);
        } catch (err) {
            console.log(err);
            res.status(400).json({ msg: err.message });
        }
    },

    delete: function (req, res) {
        try {
            const item = await Item.findById(req.params.id);
            if (!item) throw Error('No item found');

            const removed = await item.remove();
            if (!removed)
                throw Error('Error Occured');

            res.status(200).json({ success: true });
        } catch (err) {
            res.status(400).json({ msg: err.message, success: false });
        }
    }

}