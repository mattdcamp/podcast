define('podcast.views.layout', ['marionette', 'podcast.application', 'podcast.views.nav', 'podcast.views.content', 'podcast.model.layout'], function(Marionette, application, navView, contentView, layoutModel) {
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
    },
    onBeforeShow: function() {
      this.showChildView('navbar', navView);
      this.showChildView('content', contentView);
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
