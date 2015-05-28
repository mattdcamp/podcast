window.models = {};

require(['podcast.application', 'podcast.views.layout', 'podcast.application.Router', 'podcast.application.renderer', 'bootstrap'], function (application) {
  'use strict';
  application.start();
});
