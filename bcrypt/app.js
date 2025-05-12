const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());


app.get("/", (req, res) => {
    res.send("Hello World");
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash("Jerome", salt, (err, hash) => {
            console.log(hash)
        })
    })
})

app.get('/compare', (req, res) => {
    res.send("Comparing Passwords");
    bcrypt.compare("Jerome", "$2b$10$soyDSMKlLiIlQFxx4h4WYuHypRVHOIx.PY8GqAhHqqzE/.xgAp22u", (err, result) => {
        console.log(result)
    })
})

app.get("/jwt", (req, res) => {
    let token = jwt.sign({email: "jerome@example.com"}, "secret")
    res.cookie("token", token)
    res.send("Token Created");
    console.log(token)
})

app.get("/verify", (req, res) => {
    res.send("Verifying Token");
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
