// This file will establish the Finnhub client for use in other files

require('dotenv').config();

const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FINNHUB_API_KEY;

const finnhubClient = new finnhub.DefaultApi();

module.exports = finnhubClient