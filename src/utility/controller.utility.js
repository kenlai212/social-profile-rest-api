"use strict";
const {UnauthorizedError, ResourceNotFoundError, BadRequestError, InternalServerError} = require("./custom.error");

function asyncMiddleware(handler){
    return async (req, res, next) => {
		try {
			const response = await handler(req, res);

			res.json(response);
			res.status(200);

		} catch (err) {
            if(err instanceof UnauthorizedError) res.status(401);
            else if(err instanceof ResourceNotFoundError) res.status(404);
            else if(err instanceof BadRequestError) res.status(400);
            else if(err instanceof InternalServerError) res.status(500);
			else console.error(err);
			
			res.json({ "error": err.message });
		}

		return res;
	}
}

module.exports = {
    asyncMiddleware
}