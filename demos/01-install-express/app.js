const express = require("express");

const app = express();

//definir les routes

app.get("/", (req, res, next) => {
    console.log(req.hostname);
    res.send("hello world");
})

// app.get("/users/:name/:id", (req,res)=>{
//     res.send(`user: ${JSON.stringify(req.params)}`);
// })

app.get("/users/:name/:id", (req,res)=>{
    res.json(req.params);
})

app.listen(8001, () => {
    console.log(`Application started and listening at port 8001`);
})