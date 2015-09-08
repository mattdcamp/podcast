define('podcast.views.Feed', ['marionette'], function(Marionette) {
  'use strict';
  return Marionette.ItemView.extend({
    tagName: 'li',
    template: 'feed'
  });
});
