const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoute');

//CONNECT TO MONGODB DATABASE
mongoose
.connect('mongodb+srv://John:Johnbull4u@atlascluster.uuhkipz.mongodb.net/Myblogappdb?retryWrites=true&w=majority&appName=AtlasCluster')
.then(() => {
    console.log('Connected to MongoDB....')

const app = express();//express app instance
const port=4400;

// Middleware to parse JSON bodies
app.use(express.json());

// adding CORS policy middleware
app.use(cors());

//USE ROUTES
app.use('/api', postRoutes)

//LISTEN TO REQUESTS
app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`)
})

})
