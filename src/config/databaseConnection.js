/* Connect to the mongoDB via mongoose
   This is to store the stock tickers that pass the logic hit the scanner so that the Database can be queried and then return a message stating whether or not the symbol has hit the scanner before
   or if this is a new stock ticker to add to the list of past momentum stocks 
*/

require('dotenv').config();

const mongoose = require('mongoose');

async function connectToMongoDB() {
    try 
    {
        const URI = process.env.URI; // Remember to change this to your mongodb atlas string
        
        await mongoose.connect( URI, {
            dbName: 'First-Cluster' // Defining the cluster name here to help avoid a test and sub collection from being created
        });
    } 
    
    catch (error) 
    {
        console.error("Failed to connect to MongoDB:", error);
    }
}

module.exports = { connectToMongoDB };