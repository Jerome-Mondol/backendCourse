const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/posts');


app.get("/", (req, res) => {
    res.send("Jerome")
})

app.get("/create", async (req, res) => {
    let createdUser = await userModel.create({
        username: " Jerome",
        email: "jeromemondl11@gmail.com",
        age: 14
    })

    res.send(createdUser)
})

app.get("/post/create", async (req, res) => {
    let post = await postModel.create({
        postdata: "New post",
        user: "6824d12f28cc1d2d8aac4fe5"
    })

    let user = await userModel.findOne({_id: "6824d12f28cc1d2d8aac4fe5"})
    user.posts.push(post._id)
    await user.save()

    res.send({post, user})
})

app.listen(5000, () => {
    console.log("server running on port 3000");
})
