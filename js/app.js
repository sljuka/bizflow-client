var React = require('react')
var App = require('./components/App');

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;


var Processes = require('./components/Processes')
var Process = require('./components/Process')
var Inbox = require('./components/Inbox')
var History = require('./components/History')

window.React = React;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox}/>
    <Route name="history" handler={History}/>
    <Route name="processes" handler={Processes}>
      <Route name="process" path="/processes/:processId" handler={Process}></Route>
    </Route>
    <DefaultRoute handler={Processes}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
