define('podcast.views.signin', ['marionette', 'podcast.models.signin'], function(Marionette, signinCollection) {
  'use strict';

  var SigninItemView, SigninView, signinView;
  SigninItemView = Marionette.ItemView.extend({
    tagName: 'li',
    template: 'nav.signin'
  });

  SigninView = Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'nav navbar-nav navbar-right',
    childView: SigninItemView,
    collection: signinCollection
  });

  signinView = new SigninView();
  return signinView;
});
