define('podcast.application.controller', ['handlebars', 'podcast.application', 'podcast.model.rootView'], function (Handlebars, application, rootViewModel) {
  'use strict';

  application.module('controller', function(controller) {

    controller.goto = function(name) {
      rootViewModel.setView(name);
    };

    controller.gotoHomepage = function() {
      this.goto('home');
    };

    controller.gotoSignin = function() {
      this.goto('signin');
    };
  });

  return application.module('controller');
});
