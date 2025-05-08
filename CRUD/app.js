const express = require('express');
const app = express()

const userModel = require('./usermodel')

app.get("/", (req, res) => {
    res.send("Hello World!")
})

// Creating User
app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "Jerome Mondol",
        username: "jerome_mondol",
        email: "jerome@example.com"
    });
    res.send(createdUser);
});

// Updating User
app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({username: "jerome"}, {name: "Jerome Mondol"}, {new: true})
    res.send(updatedUser);
});

// Read User (all)
app.get('/read', async (req, res) => {
    let users = await userModel.find()
    res.send(users);
})

// Read User (single)
app.get('/readjrm', async (req, res) => {
    let user = await userModel.find({username: "jerome_mondol"})
    res.send(user);
})

// Delete User
app.get('/delete', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({username: "jerome_mondol"})
    res.send(deletedUser);
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
