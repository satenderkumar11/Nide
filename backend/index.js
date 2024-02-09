const express = require('express');
const app = express();

const newslist = require('./news.json');

app.get('/news', (req, res)=>{
  res.send(JSON.stringify(newslist));
})

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


