const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/youtubeRegistration")
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true

// }).then(()=>{
//     console.log(`connection successful`);
// }).catch((e) =>{
//     console.log(`no connection`)
// })


const db = mongoose.connection;
// Check for DB connection
db.once('open', function(){
 console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
    
 console.log(err);
});

