const express = require("express")
const app = express()

const mongoose = require('mongoose');

require('dotenv').config()


const mongoURI = process.env.DATA_BASE_URL

const port = process.env.PORT

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });


app.listen(port,(req, res)=>{
    console.log(`you server running at localhost:${port}`)
})


