const express = require('express');
const app = express()
const mongoose = require('mongoose')
require('dotenv').config();

const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
mongoose.connection.on('connected',()=>{
    console.log("Connected to MongoDB");
})
mongoose.connection.on('error',()=>{
    console.log("error in connection");
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

const port = process.env.PORT
app.listen(port,()=>console.log("server is running",port))