
const { urlencoded } = require('body-parser');
const express = require('express');

const app = express();
app.use(express.urlencoded({extended : false}));

app.get('/' , function(request , response){
    const toSendForm = '<form method="post" action="/store-data"><label>Your Name:</label><input type="text" name="username"/><button>Submit</button></form>'
    response.send(toSendForm);
});

app.get('/currenttime' , function(request , response) { // or req , res
    const stringData = '<h1>' + new Date().toISOString() + '</h1>';
    response.send(stringData);
});

app.post('/store-data' , function(request , response){
    const userData = request.body.username;
    console.log(userData);
    response.send('<h1>Data submitted Successfully!');
})

app.listen(3000);




// const http = require('http');

// function handleRequest(request, response) {

//     if (request.url == '/currenttime') {
//         response.statusCode = 200;
//         response.end(Date());

//     } else {
//         response.statusCode = 200;
//         response.end('<h1>Hello World!</h1>');
//     }


// }

// const server = http.createServer(handleRequest);

// server.listen(3000);