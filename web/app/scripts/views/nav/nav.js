define('podcast.views.Nav', ['marionette', 'podcast.views.Signin', 'podcast.views.nav.Tabs', 'podcast.views.nav.Search'], function(Marionette) {
  'use strict';

  var NavView;
  NavView = Marionette.LayoutView.extend({
    template: 'nav.navbar',
    tagName: 'nav',
    className: 'navbar navbar-inverse',
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

  return NavView;
});
