'use strict';

var SRSAdapter = require(__base + '/adapters').srs;
var ErrorAdapter = require(__base + '/adapters').error;

function TestsController(options) {
  this.options = options;
}

TestsController.prototype.index = function(request, reply) {
  var srsAdapter = new SRSAdapter(this.options);
  srsAdapter.getSomeData().then(function(res){
    return reply.view('testView', {
      headerComponent: res.body.headerComponent.html,
      footerComponent: res.body.footerComponent.html,
      faviconComponent: res.body.faviconComponent.html,
      resourceIncludes: res.body.resourceIncludes
    });
  }).catch(function(error){
    return new ErrorAdapter(error, reply);
  });

};


module.exports = TestsController;