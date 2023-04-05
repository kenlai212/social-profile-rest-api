"use strict";
const Joi = require("joi");
const inputValidationUtility = require("mr-utility").inputValidationUtility;

function validateReadProfileInput(input){
    inputValidationUtility.validateInput(Joi.object({
        token: Joi.string().required()
	}), input);
}

function validateCreateProfileInput(input){
    inputValidationUtility.validateInput(Joi.object({
        personId: Joi.string().required(),
        englishName: Joi.string().required(),
        avatarImageURL: Joi.string()
    }), input);
}

module.exports = {
    validateReadProfileInput,
    validateCreateProfileInput
}