// This is a file to house the sentiment configuration in the news retrieval for the Marketaux API
// Feel free to adjust the ranges of the negative and positive sentiments to more fine tune what articles are returned

// Must be equal to 0 
const neutralSentiment = `${ sentiment_gte=0 }`;

// Must be less than 0
const negativeSentiment = `${ sentiment_lte=-0 }`;

// Must be greater than 0
const positiveSentiment = `${ sentiment_gte=0.3 }`;


module.exports = { 
    neutralSentiment,
    negativeSentiment,
    positiveSentiment 
};