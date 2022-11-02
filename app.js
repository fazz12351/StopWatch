const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static("public"))
app.set("view engine", "ejs")

let seconds = 0;
let minutes = 0;
let hours = 0;
let pause = false;
let time = [];


app.get("/", function (req, res) {
    console.log(time)
    res.render("home", {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        times: time
    })

})

app.post("/restart", function (req, res) {
    pause = false
    seconds = 0;
    minutes = 0;
    hours = 0;
    res.redirect("/")

})

app.post("/save", function (req, res) {
    time.push(req.body);
    res.redirect("/")

})


app.listen(3000, function () {
    console.log("server is running")
})