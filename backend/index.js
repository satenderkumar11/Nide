require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const app = express();

const newsRouter = require('./routes/News');
const productRouter = require('./routes/Product');


app.use(express.json()); 
// Middleware
app.use(bodyParser.json());
const authRoutes = require('./routes/AuthRoutes');
app.use('/api/auth', authRoutes);

app.use('/news', newsRouter.router);
app.use('/product', productRouter.router);


app.use(cors());


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


