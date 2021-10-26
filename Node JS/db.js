const mongoose=require ('mongoose')
mongoose.connect('mongodb://localhost:27017/Registration', (err)=>{
    if(!err){
        console.log("Connection with MongoDB successfully completed ")
    }

    else{
        console.log("Error in DB connection"+JSON.stringify(err))
    }
})
module.exports= mongoose