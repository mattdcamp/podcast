define('podcast.controller', ['marionette', 'podcast.models.layoutModel'], function(Marionette, layoutModel) {
  'use strict';

  var PodcastController = Marionette.Controller.extend({
    initialize: function() {},
    start: function() {},
    home: function() {
      this.setPage('home');
    },
    test: function() {
      this.setPage('test');
    },
    setPage: function(page) {
      layoutModel.set({
        page: page
      });
    }
  });

  return new PodcastController();
});
