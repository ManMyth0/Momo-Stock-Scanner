// This is the class for the Marketuax API news retrieval
require('dotenv').config();

const marketuaxNewsFetch = require("../newsFetchingServices/fetchMarketauxNewsData.js");
const formatMarketauxNewsData = require('../formatAndFilterNewsData/formatMarketauxNewsData.js');

class MarketuaxAPI {

    async fetchAndFormatMarketauxNews(symbol) {
        try
        {
            // Implement the fetch for the symbol's news data from the chosen Marketaux API endpoint
            const newsFetchResponse = await marketuaxNewsFetch(symbol);

            // Format the fetched data
            const formattedData = await formatMarketauxNewsData(newsFetchResponse);

            // Return the formatted data for use
            return formattedData;
        }

        catch (error)
        {
            console.error(`There was an error running the Maretaux fetch and format function!`, error);

            throw new Error(`There was an error running the Maretaux fetch and format function: ${ error.message }`);
        }
    }
}
    
module.exports = MarketuaxAPI;