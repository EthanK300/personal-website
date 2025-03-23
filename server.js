const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.use(express.static("site"));
app.use(express.json());

const PORT = process.env.PORT;
const IP = process.env.IP;

const listener = app.listen(PORT, IP, () => {
    console.log(`server running on port ${PORT} on ip ${IP}`);
});