define('podcast.application.controller', ['handlebars', 'podcast.application'], function (Handlebars, application) {
  'use strict';

  application.module('controller', function(controller) {
    controller.home = function() {
      window.console.log('Going home!');
    };

    controller.test = function() {
      window.console.log('Going to test!');
    };
  });

  return application.module('controller');
});
