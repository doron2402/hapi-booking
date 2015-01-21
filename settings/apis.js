'use strict';

var apis = {
	prod: {
		restaurant: 'http://restaurant-ci.otenv.com/v8/restaurants',
		reservation: 'http://reservation-na-ci.otenv.com',
		cuisine: 'http://cuisine-pp.otenv.com/v4/cuisines',
		srs: 'http://na-srs.opentable.com/v1/'
	},
	dev: {
		restaurant: 'http://restaurant-ci.otenv.com/v8/restaurants',
		reservation: 'http://reservation-na-ci.otenv.com',
		cuisine: 'http://cuisine-pp.otenv.com/v4/cuisines',
		srs: 'http://na-srs.opentable.com/v1/'
	},
	getSettings: function(env){
		return apis[env];
	}
};

module.exports = apis;
