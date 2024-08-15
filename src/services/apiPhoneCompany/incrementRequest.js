// Contains the logic for incrementing the API's requests made value for keeping track of their requests vs call limits

const apiPhoneBook = require('./apiPhonebook.js');

function incrementRequest(apiName) {
    
    const api = apiPhoneBook[apiName];

    if (!api) 
    {
        throw new Error(`API ${ apiName } not found when trying to increment the request value!`);
    }

    return api.requests++;
}

module.exports = incrementRequest;