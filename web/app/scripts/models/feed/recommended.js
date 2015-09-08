define('podcast.models.feed.recommended', ['podcast.models.feed.FeedCollection'], function(FeedCollection) {
  'use strict';

  var RecommendedCollection, recommendedCollection;

  RecommendedCollection = FeedCollection.extend({
    url: 'http://localhost:3000/feeds/reccomended'
  });

  recommendedCollection = new RecommendedCollection();
  recommendedCollection.fetch();

  window.models.recommended = recommendedCollection;
  return recommendedCollection;
});
