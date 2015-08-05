'use strict';

var Server = {
	prod: {
		connection: {
			host: '0.0.0.0',
			port: '3300'
		},
		options: {}
	},
	stage: {
		connection: {
			host: '0.0.0.0',
			port: '3300'
		},
		options: {
			debug: {
				request: ['info', 'error']
			}
		}
	},
	dev: {
		connection: {
			host: '0.0.0.0',
			port: '3300'
		},
		options: {
			debug: {
				request: ['info', 'error']
			}
		}
	},
	getSettings: function(env){
		return Server[env];
	}
};

module.exports = Server;
