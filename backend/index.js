require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const newsRouter = require('./routes/News');


app.use(express.json()); 
app.use('/news', newsRouter.router);



const PORT = 8080;





const connectDB = async () => {
	try{
		const conn = await mongoose.connect(process.env.MONGODB_URL);
		console.log('Database connected')
	} catch (error) {
		console.log(`error in mongodb ${error}`)
	}
};

connectDB();

app.get('/', (req, res)=>{
	res.send('Server');
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


