requirejs.config({
  shim: {

  },
  paths: {
    "podcast.application": "scripts/application/application",
    "podcast.router": "scripts/application/router",
    "podcast.controller": "scripts/controller/controller",
    "podcast.templates": "scripts/generated/templates",
    backbone: "bower_components/backbone/backbone",
    underscore: "bower_components/underscore/underscore",
    bootstrap: "bower_components/bootstrap/dist/js/bootstrap",
    jquery: "bower_components/jquery/dist/jquery",
    handlebars: "bower_components/handlebars/handlebars",
    marionette: "bower_components/marionette/lib/core/backbone.marionette",
    "backbone.babysitter": "bower_components/backbone.babysitter/lib/backbone.babysitter",
    "backbone.wreqr": "bower_components/backbone.wreqr/lib/backbone.wreqr"
  },
  packages: [

  ]
});
