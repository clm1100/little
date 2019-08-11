const express = require("express");

const app = express();


app.get("/api",(req,res)=>{
    res.send({
        code:200,
        msg:'success'
    })
})

app.listen(3000,()=>{
    console.log("running is ok");
})
