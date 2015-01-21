'use strict';

var nosql = {
	prod: {
		HOST: '0.0.0.0',
		PORT: '3000'
	},
	stage: {
		HOST: '0.0.0.0',
		PORT: '3000'
	},
	dev: {
		HOST: '0.0.0.0',
		PORT: '3000'
	},
	getSettings: function(env){
		return nosql[env];
	}
};

module.exports = nosql;
