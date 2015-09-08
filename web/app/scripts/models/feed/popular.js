define('podcast.models.feed.popular', ['podcast.models.feed.FeedCollection'], function(FeedCollection) {
  'use strict';

  var PopularCollection, popularCollection;

  PopularCollection = FeedCollection.extend({
    url: 'http://localhost:3000/feeds/reccomended'
  });

  popularCollection = new PopularCollection();
  popularCollection.fetch();

  window.models.popular = popularCollection;
  return popularCollection;
});
