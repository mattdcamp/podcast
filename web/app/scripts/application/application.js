define('podcast.application', ['marionette', 'backbone', 'podcast.router', 'podcast.controller'], function(Marionette, Backbone, router) {
  'use strict';

  var PodcastApplication = Marionette.Application.extend({
    container: '#application',
    router: router,
    initialize: function() {
      Backbone.history.start({pushState:true});
    }
  });
  return new PodcastApplication();
});
