// TODO: Configure the environment variables
const mockAPIResponse = require('./mockAPI.js')
const textApi =  process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'

const PORT = 8082

// TODO add Configuration to be able to use env variables
const dotenv = require('dotenv');
dotenv.config();
// var path = require('path')
const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.static('dist')) 

//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/getURL',async function(req, res){
    try {
        // const {request} = req.body.url
       const blogUri = await fetch (res)
       const apiUrl= `${baseURL}?key=${textApi.application_key}&url=${blogUri}'&lang=en`
       const response = await fetch (apiUrl)
       const data = await response.json()
       if (data.cod == 200) {
        console.log(data);
        return data;
    } else {
        console.log(data.message);
    }
        // const url =req.body.request
        //&txt='${blogTxt}
    } catch (error) {
        console.log(error);
    }
})
app.post('/newURL', function(req, res) {
    
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})



