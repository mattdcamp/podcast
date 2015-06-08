define('podcast.application.Router', ['handlebars', 'podcast.application', 'podcast.application.controller'], function (Handlebars, application, controller) {
  'use strict';

  application.module('Router', function(Router, app, Backbone, Marionette) {
   Router = Marionette.AppRouter.extend({
    appRoutes: {
      'home': 'gotoHomepage',
      'sign-in': 'gotoSignin',
      '*actions': 'gotoHomepage'  //default
    }
  });

    app.addInitializer(function() {
      app.router = new Router({controller: controller});

      $('body').on('click', 'a:not([data-bypass])', function(evt) {
        var $this = $(this),
          href = { prop: $this.prop('href'), attr: $this.attr('href')},
          root = location.protocol + '//' + location.host;

        if (href.prop && href.prop.slice(0, root.length) === root) {
          evt.preventDefault();
          app.router.navigate(href.attr, true);
        }
      });

      Backbone.history.start({pushState: true});
    });
    return application.module('router');
  });
});
