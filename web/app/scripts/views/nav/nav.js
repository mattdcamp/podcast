define('podcast.views.nav', ['marionette', 'podcast.views.signin', 'podcast.views.nav.tabs', 'podcast.views.nav.search'], function(Marionette, signinView, tabView, searchView) {
  'use strict';

  var NavView, view;
  NavView = Marionette.LayoutView.extend({
    template: 'nav.navbar',
    tagName: 'div',
    className: 'container-fluid',
    regions: {
      //'tabs': '#nav-tabs',
      'signin': '#nav-collapse'
      //'search': '#search'
    },
    onBeforeShow: function() {
      //this.showChildView('tabs', tabView);
      //this.showChildView('signin', signinView);
      //this.showChildView('search', searchView);
    }
  });
  view = new NavView();

  return view;
});
