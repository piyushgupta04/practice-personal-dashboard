const express = require("express");
const data = require("./data.json")
const app = express();

// ejs basic code-
app.set('view engine', 'ejs');


app.listen(3000, ()=> {
    console.log("server is up!");
});

app.get("/admin", (req, res)=>{
    res.render('page', { data });
})

app.get("/", (req, res)=>{
    res.redirect("/admin")
})

app.get("/about/:username", (req, res)=>{
    const { username } = req.params;
    let user_arr = data.users
    let foundUser = user_arr.find(user => user.name.toLowerCase() === username.toLowerCase())
    res.render('user.ejs', {foundUser})
})