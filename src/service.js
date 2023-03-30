"use strict";
const inputValidationHelper = require("./input-validation.helper");

async function getProfile(input){
    inputValidationHelper.validateGetProfileInput(input);
    
    const profile = {
        personId: "P123",
        userId: "u123",
        englishName: "Ken Lai",
        avatarImageURL: "https://mandarin-robotics.co/image/123456.jpg"
    }

    return profile;
}

module.exports = {
    getProfile
}