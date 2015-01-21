'use strict';
var lab = exports.lab = require('lab').script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
// var afterEach = lab.afterEach;
var server = require('../../');

describe('Routes /public', function () {

  describe('GET test/srs', function(){
    it('should get data from srs', function(done){
      var options = {
        method: 'GET',
        url: '/test/srs'
      };
      server.inject(options, function (response) {
        response.payload.should.containEql('srs.opentable.com');
        done();
      });
    });
  });

  describe('GET /public/vendors', function () {

    it('validates public/vendors/jquery return js file', function (done) {
      var options = {
        method: 'GET',
        url: '/public/vendors/jquery/dist/jquery.min.js'
      };
      server.inject(options, function (response) {
        response.headers['content-type'].should.containEql('javascript');
        response.headers['content-length'].should.be.greaterThan(1);
        response.statusCode.should.be.exactly(200);
        done();
      });
    });

    it('validates Foundations css file', function (done) {
      var options = {
        method: 'GET',
        url: '/public/vendors/foundation/css/foundation.css'
      };
      server.inject(options, function (response) {
        response.headers['content-type'].should.containEql('css');
        response.headers['content-length'].should.be.greaterThan(1);
        response.statusCode.should.be.exactly(200);
        done();
      });
    });

  });

  describe('Route /', function () {
    var response;

    beforeEach(function (done) {
      var options = {
        method: 'GET',
        url: '/'
      };
      server.inject(options, function (res) {
        response = res;
        done();
      });
    });

    describe('When GET `/` ', function () {

      it('should return status code 200', function (done) {
        response.statusCode.should.be.exactly(200);
        done();
      });

      it('Should return Json object', function (done) {
        response.headers['content-type'].should.containEql('application/json');
        done();
      });

      it('Should contain code and body', function (done) {
        response.result.should.have.propertyByPath('code');
        response.result.should.have.propertyByPath('body', 'message');
        done();
      });
    });
  });

});
