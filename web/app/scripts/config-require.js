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
    'podcast.templateHelpers': 'scripts/application/helpers',
    'podcast.model.user': 'scripts/models/user',
    'podcast.views.rootView': 'scripts/views/rootView',
    'podcast.views.Homepage': 'scripts/views/homepage/homepage',
    'podcast.views.Welcome': 'scripts/views/homepage/welcome',
    'podcast.views.Listening': 'scripts/views/homepage/listening',
    'podcast.views.Grid': 'scripts/views/homepage/grid',
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
    'podcast.views.Account': 'scripts/views/account/account',
    'podcast.views.GeneralAccount': 'scripts/views/account/generalAccount',
    'podcast.models.feed.FeedCollection': 'scripts/models/feed/FeedCollection',
    'podcast.models.feed.all': 'scripts/models/feed/all',
    'podcast.models.feed.popular': 'scripts/models/feed/popular',
    'podcast.models.feed.recommended': 'scripts/models/feed/recommended',
    'podcast.models.feed.listening': 'scripts/models/feed/listening',
    'podcast.views.Feed': 'scripts/views/feed',
    backbone: 'bower_components/backbone/backbone',
    underscore: 'bower_components/underscore/underscore',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
    jquery: 'bower_components/jquery/dist/jquery',
    handlebars: 'bower_components/handlebars/handlebars',
    marionette: 'bower_components/marionette/lib/core/backbone.marionette',
    'backbone.babysitter': 'bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': 'bower_components/backbone.wreqr/lib/backbone.wreqr',
    'font-awesome': 'bower_components/font-awesome/fonts/*',
    'fizzy-ui-utils': 'bower_components/fizzy-ui-utils/utils',
    'doc-ready': 'bower_components/doc-ready/doc-ready',
    'matches-selector': 'bower_components/matches-selector/matches-selector',
    'get-size': 'bower_components/get-size/get-size',
    'get-style-property': 'bower_components/get-style-property/get-style-property',
    masonry: 'bower_components/masonry/masonry',
    outlayer: 'bower_components/outlayer/outlayer',
    eventEmitter: 'bower_components/eventEmitter/EventEmitter',
    eventie: 'bower_components/eventie/eventie'
  },
  packages: [

  ]
});
