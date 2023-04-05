"use strict";
const inputValidationHelper = require("../src/input-validation.helper");
const {BadRequestError} = require("mr-utility").customErrors;

describe('input-validation.helper.validateCreateProfileInput function test', () => {
    it("Missing personId", () => {
        expect.assertions(1);
        expect(()=>{
            inputValidationHelper.validateCreateProfileInput();
        }).toThrow(BadRequestError);
    });
});