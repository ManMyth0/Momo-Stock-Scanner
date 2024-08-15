/* 
 Schema to organize and configure the momentum stock data for saving to the database
 The goal is to see reoccurring stocks that have been momentum movers before, which signifies a strong chance for the stock to move with momentum again
*/
const mongoose = require('mongoose');

const momoStockOrganizer = new mongoose.Schema({

    symbol:
    {
        type: String,
        required: true,
    },

    hit_scanner_at:
    {
        type: Date,
        required: true,
        unique: true
    },

});

const momoModel = mongoose.model('momoStockModel', momoStockOrganizer);

module.exports = momoModel;