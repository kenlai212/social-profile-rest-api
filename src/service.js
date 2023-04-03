"use strict";
const { DBError } = require("mr-utility/custom.error.utility");
const inputValidationHelper = require("./input-validation.helper");
const {SocialProfile} = require("./socialProfile.model");

async function readProfile(input){
    inputValidationHelper.validateReadProfileInput(input);
    
    const profile = {
        personId: "P123",
        userId: "u123",
        englishName: "Ken Lai",
        avatarImageURL: "https://mandarin-robotics.co/image/123456.jpg"
    }

    return profile;
}

async function createProfile(input){
    inputValidationHelper.validateCreateProfileInput(input);

    let socialProfile = new SocialProfile();
    socialProfile.personId = input.personId;
    socialProfile.createdAt = new Date();
    socialProfile.updatedAt = new Date();
    socialProfile.englishName = "Johnny Robins";
    socialProfile.avatarImageURL = "test.gif";

    await socialProfile.save()
        .then(record => {
            return record;
        })
        .catch(error => {
            throw new DBError(error);
        });
}

module.exports = {
    readProfile,
    createProfile
}