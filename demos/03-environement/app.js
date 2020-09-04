const express = require("express");
const app = express();
require("dotenv").config({path:"./production.env"});
console.log(`le port est : ${process.env.PORT}`);
app.get("/", (req, res) =>{
    res.send("hello");
})

app.listen(process.env.PORT);