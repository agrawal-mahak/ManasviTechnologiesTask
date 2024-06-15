const express = require("express");
const connect = require("../config/database");
const router = express.Router();

//import controller
const {login} = require("../controllers/Auth");
const {signUp} = require("../controllers/Auth")
 

//define Api routes
router.post("/login", login);
router.get("/signUp" , signUp);
 
module.exports = router;