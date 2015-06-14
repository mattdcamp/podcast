define('podcast.views.Nav', ['marionette', 'podcast.views.nav.User'], function(Marionette, UserView) {
  'use strict';

  var NavView;
  NavView = Marionette.LayoutView.extend({
    template: 'nav.navbar',
    tagName: 'nav',
    className: 'navbar navbar-inverse',
    regions: {
      //'tabs': '#nav-tabs',
      'user': '#nav-user'
      //'search': '#search'
    },
    onBeforeShow: function() {
      //this.showChildView('tabs', tabView);
      this.showChildView('user', new UserView());
      //this.showChildView('search', searchView);
    }
  });

  return NavView;
});
