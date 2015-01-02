React = require('react')
Comment = require('./Comment')

var CommentList = React.createClass({

  render: function() {  
    var commentNodes = this.props.comments.map(function (comment) {
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
