

const express = require('express')
const router = require('./src/routers/api')

const app = new express()



app.use("/api/v1",router)

app.use('*',(req,res) => {
    res.status(404).json({
        status:"FAIL BRO"
    })
})





module.exports=app