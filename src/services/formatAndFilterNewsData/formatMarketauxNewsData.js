/* 
 This will be a file used to house the formatting of the returned news data with the necessary desired attributes
 Feel free to change what and how the data is returned. To see what the returned data should look like from the Marketaux API, please see the 'Example Response' under 'News Metadata':
 https://www.marketaux.com/documentation or, obtain an API Key, copy and paste an example endpoint to see the entire returned data structure
 The free version of the API only allows for 3 articles to be returned for any 1 symbol, so the 'limit' will always be <= 3
*/

const { formatDateToEST } = require("../../utils/timezoneConfig.js");
const filterNewsByDate = require("../formatAndFilterNewsData/filterMarketauxNewsByDate.js");

async function formatMarketauxNewsData(newsFetchResponse)
{
    try
    {
        // Extract the data array from the returned fetch response
        const { data } = newsFetchResponse;

        // Produce and return that an error occurred if the data is missing or wasn't deconstructed properly
        if (!data)
        {
            console.error(`The Marketaux news data was missing!`);

            return `The Marketaux news data was missing!`;
        }

        // Begin the first filter of the data via the current day's news only
        const filteredByDate = filterNewsByDate(data);

        // Mapping the keys from each article to return only what's deemed necessary. Feel free to add or subtract keys as needed
        const formattedMarketauxNewsData = filteredByDate.map(marketauxNewsData => {
            
            // assign the entities portion of the data for use ( symbol and company name ):
            const entity = marketauxNewsData.entities[0];

            // Begin the second filter to change the published_at date and time to EST
            const formattedPublishedAt = formatDateToEST(marketauxNewsData.published_at);

            // Choose what key value pairs to map
            return {
                symbol: entity.symbol,
                company_name: entity.name,
                published_at: formattedPublishedAt,
                title: marketauxNewsData.title,
                url: marketauxNewsData.url,
                source: marketauxNewsData.source
            }
        });

        // Return the formatted data for use
        return formattedMarketauxNewsData;
    }

    catch (error)
    {
        console.error('There was an error formatting the Marketaux News Data!:', error);

        return `There was an error formatting the Marketaux News Data!`;
    }
}

module.exports = formatMarketauxNewsData;