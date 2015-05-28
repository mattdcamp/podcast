define('podcast.model.layout', ['backbone'], function(Backbone) {
  'use strict';

  var LayoutModel, model;
  LayoutModel = Backbone.Model.extend({
    defaults: {
      page: 'home'
    }
  });
  model = new LayoutModel();
  window.models.layoutModel = model;
  return model;
});
