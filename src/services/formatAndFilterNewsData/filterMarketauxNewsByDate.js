// This will be a helper function that will filter the fetched Marketaux news by the current date so that only the present day's news will be shown

const { getTodaysDate } = require("../../utils/timezoneConfig.js");
const moment = require('moment-timezone');

function filterNewsByDate(data) {
    
    try
    {
        // Obtain todays date
        const today = getTodaysDate();

        // Filter the fetched news articles by todays date
        const filterNewsDataByDate = data.filter(articlesDate => {
            const publishedDate = moment(articlesDate.published_at).format(`YYYY-MM-DD`);

            // Compare the returned data with today's date
            return publishedDate === today
        });

        // Return the newly filtered news article data
        return filterNewsDataByDate;
    }

    catch (error)
    {
        console.error(`There was a problem filtering the Marketaux news by today's date!:`, error);

        return `There was a problem filtering the Marketaux news by today's date!`;
    }
}

module.exports = filterNewsByDate;