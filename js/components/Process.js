React = require('react')

var Process = React.createClass({

  render: function() {
    return(
      <li>
        <a href="#">
        <div className="process_title"><span className="title">{this.props.data.process_type}</span></div>
        <div className="brief">
          <div><label>block:</label><span className="status">block1</span></div>
          <div><label>requester:</label><span className="requester">Sam Tarley</span></div>
          <div><label>started at:</label><span className="requester">{this.props.data.started_at}</span></div>
        </div>
        </a>
      </li>
    );
  }

});

module.exports = Process
