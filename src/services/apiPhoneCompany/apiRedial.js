/* 
 This will be a redial method that retries the fetching of data 'n' number of times and then returns the response if successful. 
 This is to help mitigate infinite loops / continuously retrying an API call to an endpoint if the retries haven't been met but the data isn't being returned correctly, or empty etc...
*/

async function apiRedial(fetchMethod, args) {
    
    let attempts = 0;

    // Manage the amount of retries the redial method should have
    let maxAttempts = 3
        try 
        {
            while (attempts < maxAttempts) {
                
                const data = await fetchMethod(...args);

                if (data) 
                {
                    return data;
                }

                console.warn(`Response call dropped, retrying!`);
                
                attempts++;

                // This will pause execution by 1 Second, calculated in milliseconds to help avoid overwhelming the API with immediate successive requests
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
        
        catch (error) 
        {
            console.error(`An attempt to redial the API's endpoint failed!:`, error);

            throw new Error(`Couldn't successfully execute the redial method!, ${ error.message }`);
        }

}

module.exports = apiRedial;