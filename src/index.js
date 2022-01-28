const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./public/routes/index'));

app.listen(3000, () => {
    console.log("Server on listen 3000");
});