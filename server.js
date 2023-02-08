const express = require('express') // requiring the express model 
const app = express() //getting a reference to the instance 
const port = 3000;

app.listen(port, () =>{
    console.log(`App is listening at http://localhost:${port}`)

});