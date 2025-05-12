const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

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


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
