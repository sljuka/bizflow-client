React = require('react')
AutoResizeTextarea = require('./AutoResizeTextarea')

CommentForm = require('./CommentForm')
CommentList = require('./CommentList')

var CommentsSection = React.createClass({

  render: function() {
    return(
      <div className="commentsSection">
        <CommentForm />
        <CommentList comments={this.props.process.process_comments} />
      </div>
    );
  }

});

module.exports = CommentsSection
