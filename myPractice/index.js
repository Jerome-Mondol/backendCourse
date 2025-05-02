const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')



app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))



app.get("/", (req, res) => {
    fs.readdir(`./files`, (err, files) => {
        res.render("index", {files})
    })
})

app.post("/create", (req, res) => {
    fs.writeFile(`./files/${req.body.name.split(" ").join("")}.txt`, req.body.details, (err) => {
        if(err) {
            console.log(error)
        } else {
            console.log("File created successfully")
            res.redirect("/")
        }
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
