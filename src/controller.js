"use strict";
const controllerUtility = require("mr-utility").controllerUtility;
const service = require("./service");

const getProfile = controllerUtility.asyncMiddleware(async (req, res)=>{
	return await service.readProfile(req.query);
});

const postProfile = controllerUtility.asyncMiddleware(async (req, res)=>{
	return await service.createProfile(req.body);
});

module.exports = {
    getProfile,
    postProfile
}