"use strict";
const controllerUtility = require("./utility/controller.utility");
const service = require("./service");

const getProfile = controllerUtility.asyncMiddleware(async (req, res)=>{
	return await service.getProfile(req.query);
});

module.exports = {
    getProfile
}