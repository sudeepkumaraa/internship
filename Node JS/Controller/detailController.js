const express = require("express")

const {ObjectId}= require("bson")

const router = express.Router()

const {Detail}= require("../model/employee")


router.get("/",(req,res)=>
{
    Detail.find((err,docs)=>{

        if(!err){
            res.send(docs)
        }
        else{

            console.log("Error in retriving the Database" +JSON.stringify(err))
        }
    })
})

router.post('/', (req,res)=>
{

let det = new Detail({

    fname:req.body.fname,
    lname:req.body.lname,
    password:req.body.password,
    email:req.body.email,
    position:req.body.position
})

det.save((err,doc)=>
{
    if(!err){
        res.send(doc)
    }

    else{
        console.log("Error in loading data "+ JSON.stringify(err))
    }
})

})

module.exports=router;