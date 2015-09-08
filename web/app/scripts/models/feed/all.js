define('podcast.models.feed.all', ['podcast.models.feed.FeedCollection'], function(FeedCollection) {
  'use strict';

  var AllCollection, allCollection;

  AllCollection = FeedCollection.extend({
    url: 'http://localhost:3000/feeds/all'
  });

  allCollection = new AllCollection();
  allCollection.fetch();

  window.models.all = allCollection;
  return allCollection;
});
