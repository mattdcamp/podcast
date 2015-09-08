define('podcast.views.Welcome', ['marionette', 'podcast.model.user'], function(Marionette, userModel) {
  'use strict';

  var WelcomeView;

  WelcomeView = Marionette.ItemView.extend({
    tagName: 'div',
    className: 'container-fluid',
    model: userModel,
    getTemplate: function() {
      var output = 'homepage.welcome';
      if(this.model.get('isLoggedIn')) {
        output = 'homepage.welcome_back';
      }
      return output;
    },
    modelEvents: {
      'change:isLoggedIn': 'render'
    }
  });

  return WelcomeView;
});
