const express = require("express");
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index");
    res.send();
})

app.get("/data1", function (req, res) {
    res.render("data1");
    res.send();
})

app.post("/", function (req, res) {
    let ruchira_dishname1 = req.body.ruchira_dishname1;

    res.render("index",{ruchira_dishname1:ruchira_dishname1})
})





app.listen(3000, function () {
    console.log("Server is live on port 3000")
})

