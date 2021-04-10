'use strict';

// make a variable called express to use the express library
const express = require('express'); 

// server has all the Express properities and methods
const server = express();
const PORT = process.env.PORT || 2000;

// to access an file in public directory
server.use(express.static('./public'));

// Route Definitions => localhost:2000/
server.get('/',(req,res)=>{
    res.send('home route')
})

// localhost:2000/test ->http request (/test->route)
server.get('/test',(request,response)=>{
    response.send('You server is alive!!')
})

// localhost:2000/data ->http request (/data->route)
server.get('/data',(req,res)=>{
   
})


// the server is ready for listening 
server.listen (PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})