window.models = {};

require(['podcast.application', 'podcast.views.layout', 'podcast.application.Router', 'podcast.application.renderer', 'podcast.application.fetcher', 'bootstrap'], function (application) {
  'use strict';
  application.start();
});
