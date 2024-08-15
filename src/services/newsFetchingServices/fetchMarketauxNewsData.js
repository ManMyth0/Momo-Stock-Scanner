// This will be the main component in fetching the news for the Marketaux class

// Returning all the string variations here to provide interchangeability, but the specific symbol endpoint with a positive sentiment combination will be the focus here
const { 
    neutralSentimentNewsEndpoint,
    positiveSentimentNewsEndpoint,
    negativeSentimentNewsEndpoint,
    newsEndpointSymbolFilter 
    } = require('../../config/marketauxConfigForAPI/addressBookForMarketauxAPI.js');

async function marketuaxNewsFetch(symbol) {
    try 
    {
        // Replace the `{ symbol }` placeholder in the endpoint file with the generated symbol from the logic
        const replaceSymbolInSymbolFilterEndpoint = newsEndpointSymbolFilter.replace(`{symbol}`, symbol);

        // Fetch the news from the chosen Marketaux News endpoint
        const newsFetchResponse = await fetch(replaceSymbolInSymbolFilterEndpoint);

        if (newsFetchResponse.ok)
        {
            // Since the Fetch method is being use, the data needs to be parsed before it's formatted by the formatting function
            return await newsFetchResponse.json();
        }
    }   
    
    catch (error) 
    {
        console.error('There was an error running the Marketuax news fetch!', error);

        return 'There was an error running the Marketuax news fetch!';
    }
}

module.exports = marketuaxNewsFetch;