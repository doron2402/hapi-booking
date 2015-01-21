'use strict';

var is_prod = false;
var env = 'dev';
if (process.env.NODE_ENV && process.env.NODE_ENV.indexOf('prod') !== -1) {
    is_prod = true;
    env = 'prod';
    //Run production script here
}

if (!global.__base) {
	global.__base = __dirname + '/';
}

//Node Modules
var Hapi = require('hapi');

//variables
var settings = require(__base + 'settings').getSettings(env);
var serverOptions = settings.server.options;
console.log(serverOptions)
var server = new Hapi.Server(serverOptions);
var plugins = require(__base + 'routes');

server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './views',
    layoutPath: './views/layout',
    helpersPath: './views/helpers',
    partialsPath: './views/partials'

});
server.app.settings = settings;

// Create server
server.connection(settings.server.connection);

server.register(plugins, function (err) {
    if (err) { throw err; }
    server.start(function(err) {
        if (err) { throw err; }
        console.log('info', 'Server running at: ' + server.info.uri);
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});

module.exports = server;