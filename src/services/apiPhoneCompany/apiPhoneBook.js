// Create a dynamic storage (apiPhoneBook) for APIs. Must add all news api's and their respective information and bindings here for usage. Follow the guidelines below

// Make sure to create the class and it's logic before adding the API here
const FinnhubAPI = require('../classes/finnhubNewsAPI.js');
const MarketauxAPI = require('../classes/marketauxNewsAPI.js');

// Assign instance names for APIs
const FinnhubInstance = new FinnhubAPI();
const MarketauxInstance = new MarketauxAPI();

// Add the API here, labeling the object with the API's name and needed information and instance invocation binding as you see below
// The order in the phoneBook is the order that will be executed when attempting to fetch the news from the APIs and which API is next to be called by the switchboardOperator if one fails
const apiPhoneBook = {
    
    finnhub: {
        requests: 0,
        lastRequestTime: Date.now(), 
        limit: 30,       // Maximum of 30 requests per minute
        resetTime: 60 * 1000,   // Reset time calculated in milliseconds
        instance: FinnhubInstance,  // Instance 
        fetchMethod: FinnhubInstance.finnhubNewsFetch.bind(FinnhubInstance),    // Invocation binding
    },

    marketaux: {
        requests: 0,
        lastRequestTime: Date.now(),    
        limit: 100,     // Maximum of 100 requests per 24 hour period
        resetTime: 24 * 60 * 60 * 1000,     // Reset time calculated in milliseconds
        instance: MarketauxInstance,    // Instance
        fetchMethod: MarketauxInstance.fetchAndFormatMarketauxNews.bind(MarketauxInstance),    // Invocation binding
    },
};

module.exports = apiPhoneBook;