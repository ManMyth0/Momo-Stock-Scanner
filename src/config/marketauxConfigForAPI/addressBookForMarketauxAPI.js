/* 
 This will be a file that contains the different strings for the different Marketaux API calls to a specific news endpoint.
 You can also change the language that the articles are retrieved in by modifying the '&language=' part of the endpoint string.
 Please see the language options in the `News Metadata` section of the API documentation at: https://www.marketaux.com/documentation
*/ 

require('dotenv').config();

// Assigning the API key here:
const marketauxKey = process.env.MARKETAUX_API_KEY;

// If you want to change the range of the sentiments, please do it in the `sentimentConfig` file:
const { 
    positiveSentiment, 
    negativeSentiment,
    neutralSentiment 
} = require("./sentimentConfig.js");


// For the articles that contain neutral market sentiment:
const neutralSentimentNewsEndpoint = `https://api.marketaux.com/v1/news/all?${ neutralSentiment }&language=en&api_token=${ marketauxKey }`;

// For the articles that contain positive market sentiment:  
const positiveSentimentNewsEndpoint = `https://api.marketaux.com/v1/news/all?${ positiveSentiment }&language=en&api_token=${ marketauxKey }`;

// For the articles that contain negative market sentiment:
const negativeSentimentNewsEndpoint = `https://api.marketaux.com/v1/news/all?${ negativeSentiment }&language=en&api_token=${ marketauxKey }`;

/* 
 To filter the articles by symbols and sentiment ( API plans limit the number of returnable symbols at 2 but for this API we are only using 1 )
 The Free version of the API (in which we are using), only allows for 3 articles to be returned. If using an upgraded plan, please remember to modify / add the limit
 Inserted a placeholder for the symbol ( {symbol} ) to be replaced later with the desired symbol to fetch news data for:
*/ 
const newsEndpointSymbolFilter = `https://api.marketaux.com/v1/news/all?symbols={symbol}&filter_entities=true&${ positiveSentiment }&api_token=${ marketauxKey }`;


module.exports = {
    neutralSentimentNewsEndpoint,
    positiveSentimentNewsEndpoint,
    negativeSentimentNewsEndpoint,
    newsEndpointSymbolFilter
};