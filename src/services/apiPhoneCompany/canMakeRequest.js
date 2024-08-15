// Simple file to calculate if an API has reached it's endpoint call limit or not ( depends on api plan, adjust accordingly for each added API) by utilizing the `canMakeRequest` function

const apiPhoneBook = require("./apiPhonebook.js");

async function canMakeRequest(apiName) {
    try
    {
        const now = Date.now();
        const api = apiPhoneBook[apiName];
    
        if (!api) 
        {
            throw new Error(`API ${ apiName } not found when checking if an endpoint call request can be made!`);
        }
    
        // Logic to compare the last requests and reset times to determine if the API can make a call request to a news endpoint
        if (now - api.lastRequestTime > api.resetTime) 
        {
            // If the logic is true, reset the request of the api and the last request time
            api.requests = 0;
    
            api.lastRequestTime = now;
        }

        return api.requests < api.limit;
    }
    
    catch (error)
    {
        console.error(`There was an error running the request check for available API calls!:`, error);

        throw new Error(`There was an error running the request check for available API calls! ${ error.message }`);
    }
}

module.exports = canMakeRequest;