define('podcast.models.feed.listening', ['podcast.models.feed.FeedCollection'], function(FeedCollection) {
  'use strict';

  var ListeningCollection, listeningCollection;

  ListeningCollection = FeedCollection.extend({
    url: 'http://localhost:3000/feeds/listening'
  });

  listeningCollection = new ListeningCollection();
  listeningCollection.fetch();

  window.models.listening = listeningCollection;
  return listeningCollection;
});
