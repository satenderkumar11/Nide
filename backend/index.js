require('dotenv').config();
const express = require('express');
const app = express();

const newslist = require('./news.json');

app.get('/news', (req, res)=>{
  res.send(JSON.stringify(newslist));
})




const PORT = 8080;



const mongoose = require('mongoose');

const connectDB = async () => {
	try{
		const conn = await mongoose.connect(process.env.MONGODB_URL);
		console.log('Database connected')
	} catch (error) {
		console.log(`error in mongodb ${error}`)
	}
};

connectDB();


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


