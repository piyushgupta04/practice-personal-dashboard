const express = require("express");
const data = require("./data.json")
const app = express();

// require path
const path = require("path")

// ejs basic code-
app.set('view engine', 'ejs');

// ye express ko batayega ki hamesaha views wala folder yahi milega!
app.set("views", path.join(__dirname, "/views"))

// serving static files
app.use(express.static(path.join(__dirname, "/public")))


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
    // added logic to check if user exists or not before rendering page!
    if(foundUser){
        res.render('user.ejs', {foundUser})
    } else {
        res.send("NO DATA FOUND")
    }
})