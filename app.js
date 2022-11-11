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

let SWHours=""
let SWMinutes=""
let SWSeconds=""




app.get("/", function (req, res) {
    res.render("home", {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        times: time,
        SWHours:SWHours,
        SWMinutes:SWMinutes,
        SWSeconds:SWSeconds


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


app.post("/setTimer",function(req,res){
    SWHours=req.body.Hours;
    SWMinutes=req.body.Minutes;
    SWSeconds=req.body.Seconds;
    console.log(SWHours);
    console.log(SWMinutes)
    console.log(SWSeconds)

    res.redirect("/")
})


app.listen(3000, function () {
    console.log("server is running")
})


