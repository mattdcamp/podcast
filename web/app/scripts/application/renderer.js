define('podcast.application.renderer', ['handlebars', 'podcast.application', 'podcast.templates'], function (Handlebars, application, templates) {
  'use strict';

  application.module('renderer', function(renderer, app, Backbone, Marionette, $, _) {
    renderer.getPreCompiledTemplate = function(template, data) {
      if(typeof template === 'function') {
        template = template.call({}, data);
      }


      return template.split('.')
                .reduce(function (o, x) {
                  return o[x];
                }, templates);
    };

    renderer.getPostCompiledTemplate = function(template) {
      var rawTemplate;
      rawTemplate = $(template).html();
      return Handlebars.compile(rawTemplate);
    };

    renderer.compileTemplate = function(template, data) {
      var compiled = this.getPreCompiledTemplate(template, data);
      if (!_.isFunction(compiled)) {
        compiled = this.getPostCompiledTemplate(template);
      }
      return compiled.call({}, data);
    };

    Backbone.Marionette.Renderer.render = function (template, data) {
      return renderer.compileTemplate(template, data);
    };
  });

  return application.module('renderer');
});
