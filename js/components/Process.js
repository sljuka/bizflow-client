React = require('react')
var Router = require('react-router');
var Link = Router.Link;

var Process = React.createClass({

  mixins: [Router.State],

  render: function() {
    return(
      <div className="processContent">
        <h3>I am process {this.getParams().processId}</h3>
      </div>
    );
  }

});

module.exports = Process
