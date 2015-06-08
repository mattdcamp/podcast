define('podcast.application', ['marionette'], function (Marionette) {
  'use strict';

  var PodcastApplication;

  PodcastApplication = Marionette.Application.extend({
    container: '#application'
  });

  return new PodcastApplication();
});
