define('podcast.application.fetcher', ['podcast.application'], function (application) {
  'use strict';
  application.module('fetcher', function(fetcher, app, Backbone, Marionette, $, _) {
    var oldSync = Backbone.sync;
    Backbone.sync = function(method, model, options) {
      options || (options = {});

      options.crossDomain = true;
      options.xhrFields = {withCredentials: true};

      return oldSync(method, model, options);
    };

    return application.module('fetcher');
  });
});
