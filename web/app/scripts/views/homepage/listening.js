define('podcast.views.Listening', ['marionette', 'backbone', 'podcast.models.feed.listening', 'podcast.views.Feed'], function(Marionette, Backbone, listeningCollection, FeedView) {
  'use strict';

  var ListeningView;

  ListeningView = Marionette.CompositeView.extend({
    template: 'homepage.listening',
    tagName: 'div',
    className: 'container-fluid',
    model: new Backbone.Model(),
    collection: listeningCollection,
    childView: FeedView,
    childViewContainer: '.feed-list'
  });

  return ListeningView;
});
