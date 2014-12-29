React = require('react')

var Processes = React.createClass({

  render: function() {
    return(
      <div className="processes">
        <ul>
          <li>p1</li>
          <li>p2</li>
          <li>p3</li>
          <li>p4</li>
        </ul>
      </div>
    );
  }

});

module.exports = Processes
