const express = require("express");

const app = express();


app.get("/api",(req,res)=>{
    res.send({
        code:200,
        msg:'success',
        NODE_ENV: process.env.NODE_ENV,
        data: process.env.env_production
    })
})

app.listen(3000,()=>{
    console.log("running is ok");
})
