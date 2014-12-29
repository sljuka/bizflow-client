var Backbone = require('backbone');

var $ = require('jquery');
Backbone.$ = $

var AppRouter = Backbone.Router.extend({
  routes : {
    ""    : "dash",
    "dash" : "dash",
    "new" : "new"
  },
  dash : function() {
    this.current = "dash";
  },
  new : function() {
    this.current = "new";
  }
});

Backbone.history.start();

module.exports = AppRouter
