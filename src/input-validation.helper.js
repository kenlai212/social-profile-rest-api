"use strict";
const Joi = require("joi");
const inputValidationUtility = require("mr-utility").inputValidationUtility;

function validateGetProfileInput(input){
    inputValidationUtility.validateInput(Joi.object({
        token: Joi.string().required()
	}), input);
}

module.exports = {
    validateGetProfileInput
}