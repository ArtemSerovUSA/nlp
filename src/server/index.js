const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch');

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// (POST) route
app.post('/sentiment', async(req, res) => {
    const apiKey = process.env.apiKey;
    const myURL = req.body.input;
    // Link for test https://www.meaningcloud.com/developer/documentation/error-codes
    //console.log(myURL);
    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1?key=" + apiKey + "&url=" + myURL + "&lang=en");

    try {
      const data = await response.json();
      res.send(data);
      //console.log(data);
    } catch (e) {
      console.log("We've got an ERROR", e);
    }
})
