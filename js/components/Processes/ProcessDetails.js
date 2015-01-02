React = require('react')

var ProcessDetails = React.createClass({

  render: function() {
    return(
      <div className="panel-item-details {}">
        <div>
          <label>Requester:</label>
          <span>{this.props.process.requester}</span>
        </div>
        <div>
          <label>Requested on:</label>
          <span>{this.props.process.started_at}</span>
        </div>
        <div className="panel-detail-actions">
          <a href="#">ID 12345678</a>
          <a href="#">H</a>
          <a href="#">T</a>
        </div>
      </div>
    );
  }

});

module.exports = ProcessDetails
