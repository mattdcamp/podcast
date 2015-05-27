define('podcast.application', ['underscore', 'jquery', 'handlebars', 'marionette', 'backbone'], function (_, $, Handlebars, Marionette) {
  'use strict';

  var PodcastApplication;

  PodcastApplication = Marionette.Application.extend({
    container: '#application'
  });

  return new PodcastApplication();
});
