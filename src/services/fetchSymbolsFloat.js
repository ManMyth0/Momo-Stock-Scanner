/* 
 Here will house the process to obtain and format a company's float, via the Finvizor library, which will ping the Finvizor API endpoint
 The free package has a delay of around 15 minutes so the rest of the data isn't very reliable unless the delay is ok, but for this build it is not
*/

const finvizor = require('finvizor');

async function getSymbolsFloat(symbol) {

    try
    {
        const formatFloatValue = require('../utils/formatFloatsReadability.js'); 

        // First, obtain the symbol's information
        const getSymbolInformation = await finvizor.stock(symbol);

        // Extract and assign only the symbol's float value
        const symbolsFloatValue = getSymbolInformation.shsFloat;

        // Process the value for easier readability
        const formattedFloatValue= await formatFloatValue(symbolsFloatValue);

        return `${ symbol }'s Float: ${ formattedFloatValue }`;
    }

    catch (error)
    {
        console.error(`Couldn't get the symbol's float value from symbolsFloat!`, error);

        throw new Error(`Couldn't get the symbol's float value from symbolsFloat! ${ error.message }`);
    }
}

module.exports = getSymbolsFloat;