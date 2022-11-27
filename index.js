const express = require("express");
const cors = require("cors");
const db = require("./config/database.js");
const router = require("./routes/User.js");

const app = express();
app.use(express.json());
app.use(cors());

const port = 4000;

// use router
app.use(router);

db.authenticate()
    .then(()=> {
        app.listen(port, () => console.log('Server running at http://localhost:'+port));
    })