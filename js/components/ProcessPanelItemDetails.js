React = require('react')

var ProcessPanelItemDetails = React.createClass({

  render: function() {
    return(
      <div className="panel-item-details {}">
        <div>
          <label>Process:</label>
          <a href="#">{this.props.process.process_type}</a>
        </div>
        <div>
          <label>Requester:</label>
          <span>{this.props.process.requester}</span>
        </div>
        <div>
          <label>Requested on:</label>
          <span>{this.props.process.created_at}</span>
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

module.exports = ProcessPanelItemDetails
