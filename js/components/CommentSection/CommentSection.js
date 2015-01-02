React = require('react')

CommentForm = require('./CommentForm')
CommentList = require('./CommentList')

var CommentsSection = React.createClass({

  render: function() {
    return(
      <div className="commentsSection">
        <CommentForm />
        <CommentList comments={this.props.comments} />
      </div>
    );
  }

});

module.exports = CommentsSection
