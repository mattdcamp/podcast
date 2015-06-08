define('podcast.views.Homepage', ['marionette'], function(Marionette) {
  'use strict';

  var HomepageView;

  HomepageView = Marionette.ItemView.extend({
    template: 'homepage.homepage',
    tagName: 'div',
    className: 'container-fluid'
  });

  return HomepageView;
});
