define('podcast.views.Signin', ['marionette', 'backbone', 'podcast.views.SigninCollection'], function(Marionette, Backbone, SigninCollection) {
  'use strict';

  var SigninView;

  SigninView = Marionette.LayoutView.extend({
    template: 'signin.signin',
    className: 'container-fluid',
    model: new Backbone.Model(),
    regions: {
      collection: '#signin_collection'
    },
    onRender: function() {
      this.showChildView('collection', new SigninCollection());
    }
  });

  return SigninView;
});
