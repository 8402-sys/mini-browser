const express = require('express');
const path = require('path');

const proxyRoute = require('./routes/proxy');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/browse', proxyRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Running on port " + PORT);
});
