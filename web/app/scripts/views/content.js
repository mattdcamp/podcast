define('podcast.views.content', ['marionette'], function(Marionette) {
  'use strict';

  var ContentView, view;
  ContentView = Marionette.ItemView.extend({
    template: 'content',
    tagName: 'div',
    className: 'container'
  });
  view = new ContentView();

  return view;
});
