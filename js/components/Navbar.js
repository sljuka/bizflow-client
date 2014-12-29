var React = require('react');

var Navbar = React.createClass({
  render: function() {
    return (
      <nav className="container navigation" role="navigation">
        <ul>  
          <li><a href="#dash">Dashboard</a></li>
          <li><a href="#new">New Process</a></li>
          <li><a href="#">History</a></li>
          <li><a href="#">Tasks</a></li>
        </ul>
      </nav>
    )
  }
});

module.exports = Navbar
