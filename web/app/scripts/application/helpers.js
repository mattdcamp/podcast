define('podcast.templateHelpers', ['handlebars', 'podcast.templates'], function(Handlebars, templates) {
    'use strict';

    Handlebars.registerHelper('accountInfoItem', function(data) {
      var t = templates.account.accountInfoItem;
      return new Handlebars.SafeString(t.call({}, data.hash));
    });

    return {};
  });
