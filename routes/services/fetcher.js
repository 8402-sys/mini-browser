const axios = require('axios');
const cheerio = require('cheerio');

async function fetchPage(url) {
  const response = await axios.get(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });

  const html = response.data;
  const $ = cheerio.load(html);

  // Rewrite links
  $('a').each((i, el) => {
    let href = $(el).attr('href');
    if (href && href.startsWith('http')) {
      $(el).attr('href', `/browse?url=${href}`);
    }
  });

  return $.html();
}

module.exports = fetchPage;
