const express = require("express");
const app = express();
const router = require("./app.router.js");

app.use((req,res,next)=>{
    console.log(req.url);
    next();
});

app.use(express.static(`${process.cwd()}/public`));

app.use(router);

app.use((req,res,next)=>{
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

app.use((err,req,res,next)=>{
    res.status(err.status || 500).send({
        error:{
            status: err.status || 500,
            message:err.message || "internal Server error"
        }
    })
})

app.listen(8001);