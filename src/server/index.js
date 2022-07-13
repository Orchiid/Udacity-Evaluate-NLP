// TODO: Configure the environment variables
// const textApi =  process.env.API_KEY;
// const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'
let projectData = {};
const PORT = 8082

// TODO add Configuration to be able to use env variables

// import path from 'path'
const path = require('path');
// import express from 'express'
const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.static('dist')) 

const dotenv = require('dotenv');
// import dotenv from 'dotenv'
dotenv.config();
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
// import cors from 'cors'
const cors = require('cors');
// import blogUrl from '../client/js/handleSubmit.js'
// const { blogUrl } = require('../client/js/handleSubmit.js');
app.use(cors());


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/fetchUrl' , async (req, res) => {
    const apiKey = {
        key : process.env.API_KEY
    }
    res.send(apiKey)
    console.log(apiKey)
})

app.post('/newUrl', async (req, res) => {
    const body = await req.body;
    projectData = body;
    console.log(projectData);
    res.status(200).send(projectData);
});

app.get('/sendUrl', async (req, res) => {
    if(projectData){
        res.send(projectData);
    }
});
// app.get('/getURL',async function(req, res){
//     try {
//         const {request} = req.body
//     //    const blogUri = await fetch (res)
//        const apiUrl= `${baseURL}?key=${textApi.application_key}&url=${blogUrl}'&lang=en`
//        const response = await fetch (apiUrl)
//        const data = await response.json()
//        if (data.cod == 200) {
//         console.log(data);
//         return data;
//     } else {
//         console.log(data.message);
//     }
//         // const url =req.body.request
//         //&txt='${blogTxt}
//     } catch (error) {
//         console.log(error);
//     }
// })
// app.post('/newURL', async function(req, res) {
//     // const {request} = req.body.url
//     const blogUri = await (req.body.url)
//     console.log(blogUri)
//     return blogUri
// })


// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})



