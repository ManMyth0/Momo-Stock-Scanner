// This will house the integration of the Finnhub fetching and formatting processes

const fetchNews = require('../newsFetchingServices/fetchFinnhubNewsData');
const formatFinnhubNewsData = require('../formatAndFilterNewsData/formatFinnhubNewsData.js');

class FinnhubAPI {
    async finnhubNewsFetch(symbol) {
        try 
        {
            // Obtain the data from the chosen symbol
            const data = await fetchNews(symbol);

            // After the data is returned, format the data
            const formattedData = await formatFinnhubNewsData(data);

            // Return the formatted data for use
            return formattedData;
        } 
        
        catch (error) 
        {
            console.error('There was an Error in fetching with the finnhubNewsFetch function!:', error);
            
            throw new Error(`There was an Error in fetching with the finnhubNewsFetch function: ${ error.message }`);
        }
    }
}

module.exports = FinnhubAPI;