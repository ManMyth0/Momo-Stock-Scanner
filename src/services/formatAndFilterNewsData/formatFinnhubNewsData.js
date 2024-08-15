/* 
 This houses the formatting for the Finnhub News Data which will intake the data itself, format it as desired, and return it for display / usage
 Please see the documentation for the data that is expected to be returned under "Company News" at: https://finnhub.io/docs/api/company-news
*/
async function formatFinnhubNewsData(data) {
    try
    {
        /*
         This will limit the articles being returned at 5 while formatting the returned data as desired
         Feel free to add or remove key value pairs
        */ 
        return data.slice(0, 5).map(finnhubNewsData => ({
            datetime: finnhubNewsData.datetime,
            related: finnhubNewsData.related,
            source: finnhubNewsData.source,
            summary: finnhubNewsData.summary,
            url: finnhubNewsData.url
        }));
    }

    catch (error)
    {
        console.error(`There was an error with the function for formatting the Finnhub news data!`);

        return `There was an error with the function for formatting the Finnhub news data!`;
    }
}

module.exports = formatFinnhubNewsData;