const express = require("express");
const app = express();
const fsp = require("fs").promises;

app.use(async(req,res,next) => {
    await fsp.appendFile(`${process.cwd()}/private/logs.txt`, `${Date.now()}::${req.ip}::${req.url}\n`);
    next();
})

app.get("/", (req, res)=>{
    res.sendFile(`${process.cwd()}/views/index.html`);
});

app.listen(8001, ()=>{
    console.log(`Server listening on port: 8001`);
});