const express = require("express")
const app = express()

const port = process.env.PORT || 5000

app.get("/", (req, res)=>{
    const dateObject = new Date()
    const date = (`0 ${dateObject.getDate()}`).slice(-2);
    const month = (`0 ${dateObject.getMonth() + 1}`).slice(-2);
    const year = dateObject.getFullYear();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();
    // will return date & time in YYYY-MM-DD HH:MM:SS format
 
    res.json({
        "result":"docker is awesome 🐋",
        "date":`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
    })
})

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})

