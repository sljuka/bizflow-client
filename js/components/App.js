var React = require('react')

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({

  render: function() {
    return (
      <header>
        <ul>
          <li><Link to="app">Dashboard</Link></li>
          <li><Link to="inbox">Inbox</Link></li>
          <li><Link to="calendar">Calendar</Link></li>
        </ul>
        Logged in as Jane
      </header>

      <RouteHandler/>
      </div>
    );
  }

});

module.exports = App