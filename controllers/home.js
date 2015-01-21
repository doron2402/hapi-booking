'use strict';
var adapters = require(__base + '/adapters');
var SRSAdapter = adapters.srs;
var ErrorAdapter = adapters.error;

function HomeController(options) {
  this.options = options;
}

HomeController.prototype.newHome = function(request, reply) {
  var srsAdapter = new SRSAdapter(this.options);
  srsAdapter.getSomeData().then(function(res){
    var viewObj = {
      headerComponent: res.body.headerComponent.html,
      footerComponent: res.body.footerComponent.html,
      faviconComponent: res.body.faviconComponent.html,
      resourceIncludes: res.body.resourceIncludes,
      eyas: [{id: 1, name: '123'}, {id:2, name: 'Doron'}, {id:3, name: 'Rodrigo'}]
    };

    return reply.view('new_home', viewObj);
  }).catch(function(error){
    return new ErrorAdapter(error, reply);
  });

};


module.exports = HomeController;