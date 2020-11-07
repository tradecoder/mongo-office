const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users.route');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true});
mongoose.connection.once('open', ()=>{
    console.log('- mongo connected');
})

app.use(cors());
app.use(express.json());
app.use('/mongo-office/accounts/', userRoutes);


app.listen(port, ()=>{
    console.log(`- Server is listening on port ${port}`);
})