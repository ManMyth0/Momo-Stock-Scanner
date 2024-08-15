// This will house the fetching of the Finnhub News Data. The Finnhub API expects a callback

const finnhubClient = require("../establishFinnhubClient.js");
const { getTodaysDate } = require("../../utils/timezoneConfig.js");

function fetchNews(symbol) {
    return new Promise((resolve, reject) => {

            /* 
             Get the formatted date so that the current date is always called when the API fetches the symbol's news
             Please see the timezoneConfig.js file to adjust the timezone as needed. The API endpoint expects this setup: `YYYY-MM-DD` 
            */
            const today = getTodaysDate();

            finnhubClient.companyNews(symbol, today, today, (error, data, response) => {
                if (error) 
                {
                    console.error('There was an error retrieving the data from the Finnhub News Fetch!', error);

                    reject(error);
                    
                    // Stop further execution upon error
                    return
                }

                resolve(data);
        });
  
    });
};

module.exports = fetchNews;