const bodyParser = require('body-parser')
const express= require('express')
const {mongoose}= require('./db')

const app = express()

//require all the modules

const cors=require('cors') //cross orgin resourse sharing

const detailControler= require("./Controller/detailController")


app.use(cors())
app.use(bodyParser.json())

app.use('/Detail', detailControler )

app.use('/', (_req,res)=>
{
    res.send("Welcome")
})

const port = 5000;

app.listen(port,()=>{
    console.log(`Server Started at the port ${port} `)
})
