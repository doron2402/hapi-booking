'use strict';
/*
	SRS Adapter use to communicate with our SRS service
*/

var qs = require('querystring');
var request = require("superagent")
require('superagent-bluebird-promise');

function SRSAdapter(options) {
	this.options = options;
};

/**
* Return the type of user
* @method getSomeData
* @return {Object} Promise
*/
SRSAdapter.prototype.getSomeData = function() {
  var url = this.options.settings.apis.srs + '....com-2014/all-components/';
  url += '?' + qs.stringify({
    metroId: this.getMetroId({}),
    userType: this.getUserType({}),
    referPath: this.getReferPath({}),
    pageType: this.getPageType({})
  });

  return request.get(url).promise();
};

/**
* Return the type of user
* @method getUserType
* @param {Object} args
* @return {String} [standard, concierge, anonymous, admin]
*/
SRSAdapter.prototype.getUserType = function(args) {
	return 'standard';
};

/**
* Return the type of user
* @method getUserType
* @param {Object} args
* @return {Number} metroId
*/
SRSAdapter.prototype.getMetroId = function(args) {
	return 70;
};

/**
* Return the type of user
* @method getReferPath
* @param {Object} args
* @return {String} URL
*/
SRSAdapter.prototype.getReferPath = function(args) {
	return 'http%3a%2f%2fwww.opentable.com%2fhome.aspx';
};

/**
* Return the page type
* @method getPageType
* @param {Object} args
* @return {String} page type
*/
SRSAdapter.prototype.getPageType = function(args) {
	return 'VIEW';
};


module.exports = SRSAdapter;