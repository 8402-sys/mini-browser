const express = require('express');
const router = express.Router();
const fetchPage = require('../services/fetcher');

router.get('/', async (req, res) => {
  const url = req.query.url;

  if (!url) return res.send("No URL provided");

  try {
    const html = await fetchPage(url);
    res.send(html);
  } catch (err) {
    res.send("Error loading site");
  }
});

module.exports = router;
