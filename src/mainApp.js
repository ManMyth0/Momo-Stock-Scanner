require('dotenv').config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server Initiated on port: ${PORT}.`);
});

app.use(express.json());


// --------------------------------------Anything below this line will be removed and cleaned up after testing: --------------------------------------------------

// Test symbol insertion
const symbol = 'TSLA';

// const MarketuaxAPI = require("./services/classes/marketauxNewsAPI.js");

// // Initialize MarketuaxAPI instance
// const marketuaxAPI = new MarketuaxAPI();

// // Test Route to fetch news for the test symbol
// app.get('/news', async (req, res) => {
//     try {
//         const runMarketauxNewsData = await marketuaxAPI.fetchAndFormatMarketauxNews(symbol);
//         res.json(runMarketauxNewsData);
//     } catch (error) {
//         res.status(500).json({ error: 'The news route failed to fetch the data' });
//     }
// });


// const FinnhubAPI = require("./services/classes/finnhubNewsAPI.js");

// app.get('/news', async (req, res) => {
//     try
//     {
//         // const symbol = `LUMN`;
//         const finnhubAPI = new FinnhubAPI();

//         const runFinnhubNewsAPI = await finnhubAPI.finnhubNewsFetch(symbol);

//         res.status(200).json(runFinnhubNewsAPI);
//     }

//     catch (error)
//     {
//         console.log(`Error running the news route`, error);
//         res.status(500).json({error: `The News Route Failed To Fetch The Data`});
//     }
// }); 


// const switchboardOperator = require('./services/apiPhoneCompany/switchboardOperator.js');

// app.get('/news', async (req, res) => {
//     try {
//         const data = await switchboardOperator(symbol)
//         res.json(data);
//     } catch (error) {
//         res.status(500).json({ error: 'The news route failed to fetch the data' });
//     }
// });


// const getSymbolsFloat = require("./services/fetchSymbolsFloat.js");

// app.get('/news/floatValue', async (req, res) => {
//     try {
//         const floatValue = await getSymbolsFloat(symbol);
//         res.json(floatValue);
//     } catch (error) {
//         res.status(500).json({ error: `The company's float value was unavailable!` });
//     }
// });