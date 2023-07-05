const express = require('express');
const axios = require('axios');
const { validURL, extractNumbers } = require('./utils'); // You'll need to implement these utility functions

const app = express();
const port = 8008;

app.get('/numbers', async (req, res) => {
  const { url } = req.query;
  const urls = Array.isArray(url) ? url : [url]; // Ensure urls is always an array

  const results = [];
  for (const url of urls) {
    if (validURL(url)) {
      try {
        const response = await axios.get(url);
        const numbers = extractNumbers(response.data);
        results.push(...numbers);
      } catch (error) {
        console.error(`Failed to retrieve numbers from ${url}: ${error.message}`);
      }
    } else {
      console.error(`Invalid URL: ${url}`);
    }
  }

  res.json({ numbers: results });
});

app.listen(port, () => {
  console.log(`number-management-service is listening at http://localhost:${port}`);
});
