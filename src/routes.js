"use strict";
const express = require("express");
const router = express.Router();
const authenUtility = require("mr-utility").authenticationUtility;
const controller = require("./controller");

router.get(`/`, (req, res)=> res.send('Welcome to Social Profile REST API home page'));

router.get(`/profile`, authenUtility.validateJWTToken, controller.getProfile);
router.post(`/profile`, authenUtility.validateJWTToken, controller.postProfile);

module.exports = router;