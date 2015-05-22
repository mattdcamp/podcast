define('podcast.router', ['jquery', 'marionette', 'podcast.controller'], function ($, Marionette, controller) {
  'use strict';

  var PodcastRouter = Marionette.AppRouter.extend({
      controller: controller,
      appRoutes: {
        '': 'home',
        'test': 'test'
      }
    }),
    podcastRouter = new PodcastRouter();

  $('body').on('click', 'a:not([data-bypass])', function(evt) {
    var $this = $(this),
        href = { prop: $this.prop('href'), attr: $this.attr('href')},
        root = location.protocol + '//' + location.host;

    if (href.prop && href.prop.slice(0, root.length) === root) {
      evt.preventDefault();
      podcastRouter.navigate(href.attr, true);
    }
  });

  return podcastRouter;
});
