require("dotenv").config()

const express = require("express");
const app = express();
app.use(express.json());
app.use('/api', require('./routes/api'));


const PORT = process.env.PORT || 5100;

require("./config/mongoConnect")();

app.listen(PORT, () => console.log("App está en port",PORT))