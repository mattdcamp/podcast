define('podcast.views.nav.User', ['marionette', 'podcast.model.user'], function(Marionette, userModel) {
  'use strict';
  var UserView = Marionette.ItemView.extend({
    model: userModel,
    tagName: 'a',
    className: 'btn sign-in',
    getTemplate: function() {
      var output = 'nav.user_signin';
      if(this.model.get('isLoggedIn')) {
        output = 'nav.user_loggedin';
      }
      return output;
    },
    onRender: function() {
      // the <a> is $el, it needs to be updated.
      var href = (this.model.get('isLoggedIn')) ? '/account' : '/sign-in';
      this.$el.attr('href', href);
    },
    modelEvents: {
      'change:isLoggedIn': 'render'
    }
  });

  return UserView;
});
