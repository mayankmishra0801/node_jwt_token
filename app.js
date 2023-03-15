// practice
const express = require("express")
const app = express()
const jwt = require("jsonwebtoken");
const createToken = async() => {
  const token =  await jwt.sign({_id:"2132132131234"}, "fdhhjjddjjjjjjeer567893456789dfghjkltyuiirewwwxcgt567898765432134566");

  expiresIn: "2 seconds"
    
    console.log(token);
    const userVer = await jwt.verify(token,"fdhhjjddjjjjjjeer567893456789dfghjkltyuiirewwwxcgt567898765432134566")
    console.log(userVer);

}
createToken();

// application.listen(3000.)

app.listen(8002,()=>{
    console.log("port connected");
})