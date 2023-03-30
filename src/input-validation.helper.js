"use strict";
const Joi = require("joi");
const {BadRequestError} = require("./utility/custom.error");

function validateGetProfileInput(input){
    validateInput(Joi.object({
        token: Joi.string().required()
	}), input);
}

function validateInput(schema, input){
	const result = schema.validate(input);
	
	if (result.error) {
		throw new BadRequestError(result.error.details[0].message.replace(/\"/g, ''))
	}
}

module.exports = {
    validateGetProfileInput
}