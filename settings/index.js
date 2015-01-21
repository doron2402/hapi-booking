'use strict';

var Settings = {
	getSettings: function(env) {
		this.server = require('./server').getSettings(env);
		this.nosql = require('./nosql').getSettings(env);
		this.apis = require('./apis').getSettings(env);
		return Settings;
	}
};
module.exports = Settings;
