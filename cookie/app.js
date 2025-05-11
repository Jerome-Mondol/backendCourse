const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();


app.use(cookieParser());

app.get("/", (req, res) => {
    res.cookie("name", "Jerome")
    res.send("done")
})

app.get("/read", (req, res) => {
    console.log(req.cookies)
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
