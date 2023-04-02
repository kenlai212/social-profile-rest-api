"use strict";
const controllerUtility = require("mr-utility").controllerUtility;
const service = require("./service");

const getProfile = controllerUtility.asyncMiddleware(async (req, res)=>{
	return await service.getProfile(req.query);
});

module.exports = {
    getProfile
}