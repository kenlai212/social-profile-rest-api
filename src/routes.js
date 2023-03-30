"use strict";
const express = require("express");
const router = express.Router();
const authenUtility = require("./utility/authentication.utility");
const controller = require("./controller");

router.get(`/`, (req, res)=> res.send('Welcome to Social Profile REST API home page'));

router.get(`/profile`, authenUtility.validateJWTToken, controller.getProfile);

module.exports = router;