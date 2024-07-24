// Importing the libraries
import express from "express";
import axios from "axios";
import ejs from "ejs";
import bodyParser from "body-parser";

// Making the express server and defining the port 
const app = express(); 
const port = 3000;

// Combining the static files css
app.use(express.static("public"));

// It is used to use the URL-encoded inputs in JS variables through req.body
app.use(bodyParser.urlencoded({extended: true}));

// API url
const API_URL = "https://api.jikan.moe/v4";

// setting path to index.ejs
app.get("/", (req, res)=>{
    res.render("index.ejs");
})

// Listening to port 
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})