define('podcast.model.user', ['backbone'], function(Backbone) {
  'use strict';

  var UserModel, userModel;

  UserModel = Backbone.Model.extend({
    defaults: {
      isLoggedIn: false
    },
    url: 'http://localhost:3000/user'
  });

  userModel = new UserModel();
  userModel.fetch({error: function() { window.console.error(arguments); }});
  window.models.userModel = userModel;
  return userModel;
});
