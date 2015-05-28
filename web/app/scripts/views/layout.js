define('podcast.views.layout', ['marionette', 'podcast.application', 'podcast.model.layout'], function(Marionette, application, layoutModel) {
  'use strict';
  var ApplicationLayout, layoutView;

  ApplicationLayout =  Marionette.LayoutView.extend({
    model: layoutModel,
    template: 'layout',
    tagName: 'div',
    id: 'layout',
    regions: {
      'navbar': '#navbar',
      'content': '#content'
    }
  });
  layoutView = new ApplicationLayout();

  application.addRegions({
    pageRegion: '#application'
  });

  application.on('start', function() {
    application.pageRegion.show(layoutView);
  });

  return layoutView;
});
