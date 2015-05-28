define('podcast.views.nav', ['marionette'], function(Marionette) {
  'use strict';

  var NavView, view;
  NavView = Marionette.ItemView.extend({
    template: 'navbar',
    tagName: 'div',
    className: 'container-fluid'
  });
  view = new NavView();

  return view;
});
