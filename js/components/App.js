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
      <div>
        <header className="container navigation">
          <ul>
            <li><Link to="processes">Processes</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="history">History</Link></li>
          </ul>
        </header>

        <RouteHandler/>
      </div>
    );
  }

});

module.exports = App