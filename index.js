 const express = require("express")
 const app = express()

 require("dotenv").config()
 app.use(express.urlencoded({extended: true}))
 app.use(express.json())
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html"); 
})
app.post("/api/Register", (req, res)=>{
    // console.log(express.json(req.body))
    // res.send(`<h1>Welcome ${req.body.name}</h1>
    //           <h2> Your email is ${req.body.email}</h2>
    //           <h2> Your password is ${req.body.password} `
    
    // );
    res.json({
        "message":"Success"
    }) 

})
app.post("/login", (req,res) => {
    res.send(req.body)
})

 const PORT = process.env.PORT 


app.listen(PORT, ()=> {
    console.log("express server in live now at port: " + PORT) 
 })