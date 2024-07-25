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
const API_URL = "https://v2.jokeapi.dev/joke";

// setting path to index.ejs
app.get("/", (req, res)=>{
    res.render("index.ejs", {content: "waiting for data... "});
})

app.get("/get-joke", async(req, res)=>{
    res.render("index.ejs", {content: "get-joke route working"});
    // const serachId = req.body.idp;
    // try {
    //     const result = await axios.get(API_URL+"/anime/"+serachId);
    //     res.render("index.ejs", {
    //         content: JSON.stringify(result.data)
    //     });
    // } catch (error) {
    //     res.render("index.ejs", {
    //         content: JSON.stringify(error.result.data)
    //     });
    // }
    
})

// Listening to port 
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})