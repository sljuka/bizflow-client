var React = require('react')
var App = require('./components/App');

// var Router = require('react-router');
// var Route = Router.Route;
// var NotFoundRoute = Router.NotFoundRoute;
// var DefaultRoute = Router.DefaultRoute;
// var Link = Router.Link;
// var RouteHandler = Router.RouteHandler;

window.React = React;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

React.render(
  <App/>,
  document.getElementById('content')
);



