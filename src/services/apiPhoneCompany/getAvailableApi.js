// This will handle selecting an available API from the 'apiLimitStorage's list by utilizing the 'canMakeRequest' function

// getAvailableApi.js

const apiPhoneBook = require('./apiPhonebook.js');
const canMakeRequest = require('./canMakeRequest.js');

async function getAvailableApi() {
    try 
    {
        // Iterate over the keys of apiStorage to find the first one that can make a request. This is a mechanism to help get around the API's call limits 
        for (const apiName in apiPhoneBook) {

            // Directly check if the API can make a request
            if (canMakeRequest(apiName)) 
            {
                return apiName;
            }
        }

        // If no API can make a request, return null or handle as needed
        return `No available News APIs to make calls!`;
    } 
    
    catch (error) 
    {
        console.error(`Couldn't get the list of available APIs:`, error);

        throw new Error(`Couldn't get the list of available APIs: ${ error.message }`);
    }
}

module.exports = getAvailableApi;