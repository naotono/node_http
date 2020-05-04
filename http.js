const http = require("http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

const server = http.createServer(app);
server.listen(1000, () => console.log("Server running"))