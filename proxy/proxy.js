const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.YELP_API_KEY,
  },
};

app.get("/api", async (req, res) => {
  const { term, location, sort } = req.query;
  const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort}&limit=20`;
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
