const express =  require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");


// to automatically serve all the files in public, especially the html's
app.use(express.static("public"))

// responsible for parsing body requests that happen through middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())


// let's listen 
app.listen(port,()=>{
    console.log("Server listening on port",3000)
})