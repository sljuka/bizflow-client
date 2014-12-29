// tutorial2.js

React = require('react')
Comment = require('./Comment')
CommentStore = require('../store/comment_store')

var CommentList = React.createClass({

  getInitialState: function() {
    return { comments: CommentStore.getComments() }
  },

  componentWillMount: function() {
    CommentStore.addChangeListener(this._onChange);
    CommentStore.pullComments(1);
  },

  _onChange: function() {
    this.setState({ comments: CommentStore.getComments() })
  },

  render: function() {  
    var commentNodes = this.state.comments.map(function (comment) {
      return (
        <Comment comment={comment} key={comment.id} />
      );
    });
    return(
      <ul className="commentList">
        {commentNodes}
      </ul>
    );

  }
});

module.exports = CommentList
