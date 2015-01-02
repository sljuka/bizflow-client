React = require('react')
var Router = require('react-router');
var Link = Router.Link;

var ProcessLink = React.createClass({

  render: function() {
    var route = "/processes/" + this.props.data.id
    return(
      <li>
        <Link to={route}>
        <div className="process_title"><span className="title">{this.props.data.process_type}</span></div>
        <div className="brief">
          <div><label>block:</label><span className="status">block1</span></div>
          <div><label>requester:</label><span className="requester">{this.props.data.requester}</span></div>
          <div><label>started at:</label><span className="requester">{this.props.data.started_at}</span></div>
        </div>
        </Link>
      </li>
    );
  }

});

module.exports = ProcessLink
