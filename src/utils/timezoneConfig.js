/* 
 This is a helper file to make sure that the correct timezone is in use and the conversion of a timestamp into EST with the help of the moment-timezone library.
 Change the timezone / configurations to suit the correct timezone needs below when running this scanner
*/

const moment = require("moment-timezone");

function getTodaysDate() {
    try
    {   
        return moment.tz(`America/New_York`).format(`YYYY-MM-DD`);
    }

    catch (error)
    {
        console.error(`Couldn't format the correct Month, Day or Year!:`, error);
        
        return `Couldn't format the correct Month, Day or Year!`;
    }
}


function formatDateToEST(timestamp)
{
    try
    {
        return moment(timestamp).tz(`America/New_York`).format(`YYYY-MM-DD HH:mm A`);
    }

    catch (error)
    {
        console.error(`Couldn't get the correct Date or Time of Day!:`, error);

        return `Couldn't get the correct Date or Time of Day!`;
    }
}

module.exports = { getTodaysDate, formatDateToEST };