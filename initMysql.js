"use strict";
const {SocialProfile} = require("./src/socialProfile.model");

//create mysql tables
SocialProfile.sync({force: true});