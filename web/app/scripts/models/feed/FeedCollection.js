define('podcast.models.feed.FeedCollection', ['backbone'], function(Backbone) {
  'use strict';

  var Feed, FeedCollection;
  Feed = Backbone.Model.extend({
  });

  FeedCollection = Backbone.Collection.extend({
    model: Feed
  });

  return FeedCollection;
});
