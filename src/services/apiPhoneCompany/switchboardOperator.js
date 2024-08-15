/* 
 This service acts as a switchboard for the news APIs. It switches to the next available API if one reaches its limit, fails, or returns empty data.
 The goal is to extend the availability of news endpoints and ensure continuous access to news data.
*/

const apiRedial = require('./apiRedial.js');
const apiPhonebook = require('./apiPhonebook.js');
const canMakeRequest = require('./canMakeRequest.js');

async function switchboardOperator(symbol) {
    try
    {
        for (const [apiName, api] of Object.entries(apiPhonebook)) {

            // First, check if the API can make a request
            if (!canMakeRequest(apiName)) 
            {
                console.warn(`${ apiName } cannot make a call request. Moving to the next API...`);
    
                // Skip to the next iteration if the call request could not be made
                continue;
            }
    
            // Retry fetching data from the API if the expected data wasn't returned
            const data = await apiRedial(api.fetchMethod, [ symbol ]);

            if (data)
            {
                return data;
            }
    
            // Log invalid response and continue to the next available API
            console.warn(`${ apiName } returned empty or invalid data. Trying the next API!`);
        }
    
        // If no valid data is found from any API, return a failure response 
        return `The call could not be completed as dialed, no data was found from any API!`;
    }

    catch (error)
    {
        console.error(`The operator could not be reached because of an error!`, error);

        throw new Error(`The operator could not be reached because of an error! ${ error.message }`);
    }
}

module.exports = switchboardOperator;