const express = require("express");
const app = express();

app.use('/media', express.static('public'));