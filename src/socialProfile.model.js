"use strict";
const {DataTypes} = require('sequelize');
const sequelize = require('mr-utility').mysqlUtility.getSequelize();

const SocialProfile = sequelize.define('socialProfile', {
    personId:{
        type: DataTypes.STRING,
		primaryKey: true
    },
	createdAt:{
		type: DataTypes.DATE,
		allowNull: false
	},
	updatedAt:{
		type: DataTypes.DATE,
		allowNull: false
	},
	englishName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	avatarImageURL: {
		type: DataTypes.STRING,
		allowNull: true
	}
});

module.exports = {
	SocialProfile
}