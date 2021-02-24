const express = require('express');
const app = express();

const fileServerMiddleware = express.static('public');
app.use(fileServerMiddleware);

//initiate the server and start listening to the port 
app.listen(3000, function(){
   console.log('App started on port 3000');
});
