"use strict";
const {Sequelize} = require("sequelize");
const config = require('config');

let sequelize;
function getSequelize(db){
    if(sequelize) return sequelize;

    sequelize = new Sequelize(
        db, 
        config.get("db.mysql.userId"), 
        config.get("db.mysql.password") ,{
        host: config.get("db.mysql.host"),
        dialect: "mysql"
    });

    return sequelize;
}

module.exports = {
	getSequelize
}