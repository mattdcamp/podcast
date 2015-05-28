window.models = {};

require(['podcast.application', 'podcast.views.layout', 'podcast.application.Router', 'podcast.application.renderer'], function (application) {
  'use strict';
  application.start();
});
