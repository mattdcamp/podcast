requirejs.config({
  shim: {
    'bower_components/underscore/underscore': {
      exports: '_'
    },
    bootstrap: {
      deps: [
        'jquery'
      ]
    }
  },
  paths: {
    'podcast.application': 'scripts/application/application',
    'podcast.application.renderer': 'scripts/application/renderer',
    'podcast.application.fetcher': 'scripts/application/fetcher',
    'podcast.application.controller': 'scripts/application/controller',
    'podcast.application.Router': 'scripts/application/router',
    'podcast.templates': 'scripts/generated/templates',
    'podcast.views.layout': 'scripts/views/layout',
    'podcast.views.content': 'scripts/views/content',
    'podcast.model.layout': 'scripts/models/layout',
    'podcast.views.nav': 'scripts/views/nav/nav',
    'podcast.views.nav.tabs': 'scripts/views/nav/tabs',
    'podcast.views.nav.search': 'scripts/views/nav/search',
    'podcast.models.nav.tabs': 'scripts/models/nav/tabs',
    'podcast.models.nav.search': 'scripts/models/nav/search',
    'podcast.views.signin': 'scripts/views/signin',
    'podcast.models.signin': 'scripts/models/signin',
    backbone: 'bower_components/backbone/backbone',
    underscore: 'bower_components/underscore/underscore',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
    jquery: 'bower_components/jquery/dist/jquery',
    handlebars: 'bower_components/handlebars/handlebars',
    marionette: 'bower_components/marionette/lib/core/backbone.marionette',
    'backbone.babysitter': 'bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': 'bower_components/backbone.wreqr/lib/backbone.wreqr',
    'font-awesome': 'bower_components/font-awesome/fonts/*'
  },
  packages: [

  ]
});
