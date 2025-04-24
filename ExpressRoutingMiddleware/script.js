const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("I am middleware!!!!!!!!!!")

    next()
})

app.get("/", (req, res, next) => {
    return next(new Error("Something went wrong"))
})

app.get("/profile", (req, res) => {
    res.send("Hello from Profile page heloooo")
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
