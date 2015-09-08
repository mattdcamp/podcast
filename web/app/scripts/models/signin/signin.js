define('podcast.models.signin', ['backbone'], function(Backbone) {
  'use strict';

  var SigninCollection, signinCollection;
  SigninCollection = Backbone.Collection.extend({
    url: 'http://localhost:3000/login/supported'
  });

  signinCollection = new SigninCollection();
  signinCollection.fetch();

  window.models.signin = signinCollection;
  return signinCollection;
});
