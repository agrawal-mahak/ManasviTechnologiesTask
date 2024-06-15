const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());

//import routes for todo api
const auth = require("./routes/auth");

//mount the todo api routes
// app.use("/api/v1", authRoutes);

//start server
app.listen(PORT, () => {
    console.log(`server started succ.at ${PORT}`);
})

//connect to the database
const dbConnect = require("./config/database");
// const { Router } = require("express");         line hatai bcoz of postman
dbConnect();

//default Route
app.get("/", (req, res) =>{
    res.send(`this is home page.`);
})