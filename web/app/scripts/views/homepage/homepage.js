define('podcast.views.Homepage', ['marionette', 'backbone', 'podcast.views.Welcome', 'podcast.views.Listening', 'podcast.views.Grid'],
  function(Marionette, Backbone, WelcomeView, ListeningView, GridView) {
  'use strict';

  var HomepageView;

  HomepageView = Marionette.LayoutView.extend({
    template: 'homepage.homepage',
    tagName: 'div',
    className: 'container-fluid',
    model: new Backbone.Model(),
    regions: {
      welcome: '#welcome',
      listening: '#listening',
      grid: '#grid'
    },
    onRender: function() {
      this.showChildView('welcome', new WelcomeView());
      this.showChildView('listening', new ListeningView());
      this.showChildView('grid', new GridView());
    }
  });

  return HomepageView;
});
