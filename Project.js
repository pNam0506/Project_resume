const express = require('express');
const morgan = require('morgan');
const path = require('node:path');

const app = express();
const port = 4800;
const http = require('http')

// const server = http.createServer(function(req,res){

//     const myhtml = `
//     <h1>Hi</h1>
//     <p></p>
//     `

//     res.write(myhtml)
//     res.end()

// })

// server.listen(4800, 'localhost',()=>{
//     console.log("start server in port 4800")
// })



app.get("/", (req, res) => {
    // The static middleware will handle serving the HTML file
    res.send('สวัสดีจ้า')
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});