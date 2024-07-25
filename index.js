// Importing the libraries
import express, { response } from "express";
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
    res.render("index.ejs", {
        content1: "waiting for data... ",
        content2: ""
    });
})

app.post("/joke", async(req, res)=>{
    const joke_category = req.body["category"];
    const joke_string = req.body["search_string"];
    const num_of_joke = req.body["amount"];
    console.log(`joke_category: ${joke_category},  joke_string: ${joke_string},   num_of_joke: ${num_of_joke}`);
    try {
        const response = await axios.get(API_URL+"/"+joke_category+"?contains="+joke_string+"&amount="+num_of_joke);
        const result = JSON.stringify(response.data,"", 2);
        console.log(`Joke: ${result}`);
        res.render("index.ejs", {
            content1: result,
            content2: ""
        })
        
    } catch (error) {
        res.render("index.ejs", {content1: JSON.stringify(response.data), content2: ""});
    }
    // const serachId = req.body.id;
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