define('podcast.views.GeneralAccount', ['marionette', 'podcast.model.user'], function(Marionette, userModel) {
  'use strict';

  var GeneralAccountView;

  GeneralAccountView = Marionette.ItemView.extend({
    tagName: 'div',
    model: userModel,
    template: 'account.generalAccount'
  });

  return GeneralAccountView;
});
