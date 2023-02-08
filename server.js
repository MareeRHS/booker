const express = require('express') // requiring the express model 
const app = express() //getting a reference to the instance 
const port = 3000;

app.set('view engine','ejs' )


app.get("/",(req, res) =>{
    console.log("Loadingt the index page")
    res.render("index", {text:"WELCOME TO BOOKER!"})
})






app.listen(port, () =>{
    console.log(`App is listening at http://localhost:${port}`)

});