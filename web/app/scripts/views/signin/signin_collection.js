define('podcast.views.SigninCollection', ['marionette', 'podcast.models.signin'], function(Marionette, signinCollection) {
  'use strict';

  var SigninItemView, SigninView;
  SigninItemView = Marionette.ItemView.extend({
    tagName: 'li',
    template: 'signin.signin_collection'
  });

  SigninView = Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: SigninItemView,
    collection: signinCollection
  });

  return SigninView;
});
