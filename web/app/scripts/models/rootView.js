define('podcast.model.rootView', ['backbone', 'podcast.views.Nav', 'podcast.views.Homepage', 'podcast.views.Signin'], function(Backbone, NavView, HomepageView, SignInView) {
  'use strict';

  var LayoutModel, model, viewMap;

  viewMap = {
    nav: NavView,
    home: HomepageView,
    signin: SignInView
  };

  LayoutModel = Backbone.Model.extend({
    defaults: {
      navView: NavView,
      contentView: HomepageView,
      viewName: 'home'
    },
    getView: function(name) {
      return viewMap[name];
    },
    setView: function(name) {
      var view = this.getView(name);
      if(view) {
        this.set({
          contentView: view,
          viewName: name
        });
      } else {
        window.console.error('View:' + name + ' does not exist.');
      }
    }
  });
  model = new LayoutModel();
  window.models.layoutModel = model;
  return model;
});
