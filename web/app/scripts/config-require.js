requirejs.config({
  shim: {
    'bower_components/underscore/underscore': {
      exports: '_'
    }
  },
  paths: {
    'podcast.application': 'scripts/application/application',
    'podcast.application.renderer': 'scripts/application/renderer',
    'podcast.application.controller': 'scripts/application/controller',
    'podcast.application.Router': 'scripts/application/router',
    'podcast.templates': 'scripts/generated/templates',
    'podcast.views.layout': 'scripts/views/layout',
    'podcast.model.layout': 'scripts/models/layout',
    backbone: 'bower_components/backbone/backbone',
    underscore: 'bower_components/underscore/underscore',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
    jquery: 'bower_components/jquery/dist/jquery',
    handlebars: 'bower_components/handlebars/handlebars',
    marionette: 'bower_components/marionette/lib/core/backbone.marionette',
    'backbone.babysitter': 'bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': 'bower_components/backbone.wreqr/lib/backbone.wreqr'
  },
  packages: [

  ]
});
