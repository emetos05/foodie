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

app.get("/api", (req, res) => {
  const { term, location, sort } = req.query;
  fetch(
    `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort}&limit=20`,
    options
  )
    .then((res) => res.json())
    .then((response) => res.send(response))
    .catch((err) => console.error("error:" + err));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
