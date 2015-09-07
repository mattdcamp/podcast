define('podcast.views.Account', ['marionette', 'backbone', 'podcast.model.user', 'podcast.views.GeneralAccount'], function(Marionette, Backbone, userModel, GeneralAccount) {
  'use strict';

  var AccountView;

  AccountView = Marionette.LayoutView.extend({
    template: 'account.account',
    className: 'container-fluid',
    model: userModel,
    regions: {
      generalAccount: '#generalAccount'
    },
    onRender: function() {
      if(this.model.get('isLoggedIn')) {
        this.showChildView('generalAccount', new GeneralAccount());
      }
    },
    modelEvents: {
      'change:isLoggedIn': 'render'
    }
  });

  return AccountView;
});
