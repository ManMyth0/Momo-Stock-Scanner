// Just like the name suggests, this function will format the returned symbol's float value for easier readability

async function formatFloatValue(symbolsFloatValue) {
    try
    {
        let formattedNumber;
    
        // Handle negative numbers if necessary but this shouldn't be needed
        const absValue = Math.abs(symbolsFloatValue);
         
        // Billions
        if (absValue >= 1_000_000_000) 
        {
            formattedNumber = `${ (symbolsFloatValue / 1_000_000_000).toFixed(3) }_B`;
        } 
        
        // Millions
        else if (absValue >= 1_000_000) 
        {
            formattedNumber = `${ (symbolsFloatValue / 1_000_000).toFixed(3) }_M`;
        } 
        
        // Thousands
        else if (absValue >= 1_000) 
        {
            formattedNumber = `${ (symbolsFloatValue / 1_000).toFixed(1) }_K`;
        }
        
        // Any number less than a thousand
        else
        {
            formattedNumber = new Intl.NumberFormat().format(symbolsFloatValue);
        }
        
        return formattedNumber;
    }

    catch (error)
    {
        console.error(`Unable to format the float's value!:`, error);

        throw new Error(`Unable to format the float's value! ${ error.message }`);
    }
}

module.exports = formatFloatValue;