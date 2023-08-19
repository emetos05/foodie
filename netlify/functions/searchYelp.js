const axios = require("axios");
require("dotenv").config();

exports.handler = async function (event, context) {
  const { term, location, sort } = event.queryStringParameters;

  const options = {
    method: "GET",
    url: `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort}&limit=20`,
    headers: {
      accept: "application/json",
      Authorization: process.env.YELP_API_KEY,
    },
  };

  try {
    const response = await axios.request(options);

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers: { "Access-Control-Allow-Origin": "*" },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Business data couldn't be retrieved!" }),
    };
  }
};
