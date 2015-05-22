define('podcast.controller', ['marionette'], function(Marionette) {
  'use strict';

  var PodcastController = Marionette.Controller.extend({
    initialize: function() {},
    start: function() {},
    home: function() {
      window.console.log('At Home!!');
    },
    test: function() {
      window.console.log('At Test!!');
    }
  });

  return new PodcastController();
});
