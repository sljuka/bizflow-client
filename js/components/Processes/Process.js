React = require('react')
var Router = require('react-router');
var Link = Router.Link;
var CommentSection = require('../CommentSection/CommentSection')
var ProcessDetails = require('./ProcessDetails')

var Process = React.createClass({

  mixins: [Router.State],

  getInitialState: function() {
    return {data: {
        comments: []
      }
    }
  },

  loadCommentsFromServer: function() {
    id = this.getParams().processId
    $.ajax({
      url: "http://localhost:3000/api/v1/processes/" + id,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadCommentsFromServer();
  },

  componentWillReceiveProps: function () {
    this.loadCommentsFromServer();
  },

  render: function() {
    return(
      <div className="processContent">
        <h4>{this.state.data.type} (#{this.getParams().processId})</h4>
        <ProcessDetails process={this.state.data} />
        <CommentSection comments={this.state.data.comments}/>
      </div>
    );
  }

});

module.exports = Process
