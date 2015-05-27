define('podcast.application', ['underscore', 'jquery', 'handlebars', 'marionette', 'backbone', 'podcast.router', 'podcast.templates'], function(_, $, Handlebars, Marionette, Backbone, router, templates) {
  'use strict';

  var PodcastApplication;

  Backbone.Marionette.Renderer.render = function(template, data){
    var html, rawTemplate, compiledTemplate;

    compiledTemplate = template.split('.').reduce(function(o, x) { return o[x]; }, templates);
    if(!_.isFunction(compiledTemplate)) {
      rawTemplate = $(template).html();
      compiledTemplate = Handlebars.compile(rawTemplate);
    }
    html = compiledTemplate.call({}, data);
    return html;
  };

  PodcastApplication = Marionette.Application.extend({
    container: '#application',
    router: router,
    initialize: function() {
      Backbone.history.start({pushState:true});
    }
  });

  return new PodcastApplication();
});
