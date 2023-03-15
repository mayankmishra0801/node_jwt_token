const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/LoginSignUpTutorial")
// mongoose.connect("mongodb+srv://fresh:12345678@cluster0.ic3wtg0.mongodb.net/tut?retryWrites=true&w=majority")

.then(()=>{
    console.log("MongoDb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})


const collection = new mongoose.model("Collection1",LogInSchema)

module.exports=collection
