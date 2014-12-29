var React = require('react')
var App = require('./components/App');

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Processes = require('./components/Processes')
var Inbox = require('./components/Inbox')
var History = require('./components/History')

window.React = React;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox}/>
    <Route name="history" handler={History}/>
    <DefaultRoute handler={Processes}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
