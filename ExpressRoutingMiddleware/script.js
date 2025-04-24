const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("I am middleware!!!!!!!!!!")

    next()
})


app.get("/", (req, res) => {
    res.send("Hello from Jerome!!")
})

app.get("/profile", (req, res) => {
    res.send("Hello from Profile page heloooo")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
