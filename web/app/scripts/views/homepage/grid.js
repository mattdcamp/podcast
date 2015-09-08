define('podcast.views.Grid', ['marionette', 'backbone', 'podcast.models.feed.all', 'podcast.views.Feed'], function(Marionette, Backbone, allFeedsCollection, FeedView) {
  'use strict';

  var GridView;

  GridView = Marionette.CompositeView.extend({
    template: 'homepage.grid',
    tagName: 'div',
    className: 'container-fluid',
    model: new Backbone.Model(),
    collection: allFeedsCollection,
    childView: FeedView,
    childViewContainer: '.feed-list'
  });

  return GridView;
});
