define('podcast.views.rootView', ['marionette', 'podcast.application', 'podcast.model.rootView'], function(Marionette, application, rootViewModel) {
  'use strict';
  var RootView, rootView;

  RootView =  Marionette.LayoutView.extend({
    el: '#application',
    model: rootViewModel,
    template: 'rootView',
    regions: {
      'nav': '#navbar',
      'content': '#content'
    },
    initialize: function() {
      this.listenTo(this.model, 'change:contentView', this.showContent);
      this.listenTo(this.model, 'change:navView', this.showNav);
    },
    showContent: function() {
      var ContentView = this.model.get('contentView');
      this.showChildView('content', new ContentView() );
    },
    showNav: function() {
      var NavView = this.model.get('navView');
      this.showChildView('nav', new NavView());
    }
  });

  rootView = new RootView();
  application.addInitializer(function() {
    rootView.render();
    rootView.showContent();
    rootView.showNav();
  });

  return rootView;
});
