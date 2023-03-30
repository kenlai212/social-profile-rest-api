const jwt = require("jsonwebtoken");
const config = require('config');

function validateJWTToken(req, res, next){
    const authHeader = req.headers["authorization"];
    const jwtToken = authHeader && authHeader.split(" ")[1];

    if(config.get("api.validateJWTToken")){
        if (!jwtToken){
            console.error("No JWTToken");
            return res.sendStatus(401);
        }
    
        jwt.verify(jwtToken, config.get("authorization.jwt.passPhrase"), (err, claim) => {
            if (err) {
                console.error("Error while verifying JWT Token, running jwt.verify()", err);
                return res.sendStatus(403);
            }

            if(!claim.userId){
                console.error("JST token claim missing userId");
                return res.sendStatus(403);
            }

            if(!claim.groups){
                console.error("JST token claim missing groups");
                return res.sendStatus(403);
            }

            authorizeClaim(claim);
        });
    }

    next();
}

function authorizeClaim(claim){
    const validGroups = config.get("authorization.validGroups");
    
    console.log(claim);
    console.log(validGroups);
}

module.exports = {
    validateJWTToken
} 