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
    'podcast.model.user': 'scripts/models/user',
    'podcast.views.rootView': 'scripts/views/rootView',
    'podcast.views.Homepage': 'scripts/views/homepage/homepage',
    'podcast.model.rootView': 'scripts/models/rootView',
    'podcast.views.Nav': 'scripts/views/nav/nav',
    'podcast.views.nav.Tabs': 'scripts/views/nav/tabs',
    'podcast.views.nav.Search': 'scripts/views/nav/search',
    'podcast.views.nav.User': 'scripts/views/nav/user',
    'podcast.models.nav.tabs': 'scripts/models/nav/tabs',
    'podcast.models.nav.search': 'scripts/models/nav/search',
    'podcast.views.Signin': 'scripts/views/signin/signin',
    'podcast.views.SigninCollection': 'scripts/views/signin/signin_collection',
    'podcast.models.signin': 'scripts/models/signin/signin',
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
