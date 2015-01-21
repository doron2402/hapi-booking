'use strict';
/*
  Error Adapter extend Error class
*/
var boom = require('boom');

function ErrorAdapter(options, reply) {

  if (!reply) {
    console.log('Error >> reply object not defined.');
  }
  if (!options) {
    return reply.view('error', {error: boom.notFound('missing')});
  }
  else {
    console.log('options....');
    console.log('options....');
    console.log('options....');
    console.log(options);
    if (options.status) {
      var error = new Error(options.status);
      switch(options.status) {
        case 404:
          reply.view('error', {error:  boom.notFound('missing')});
          break;
        default:
          reply.view('error', {error: boom.wrap(error, options.status)});
          break;
      }
    } else {
      var error = new Error('Random Error');
      return reply.view('error', {error: boom.wrap(error, 400)});
    }

  }
};


module.exports = ErrorAdapter;