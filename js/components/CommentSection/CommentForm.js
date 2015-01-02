React = require('react')
AutoResizeTextArea = require('./AutoResizeTextArea')

var CommentForm = React.createClass({

  getInitialState: function() {
    return {commentPostUrl: "/process_comments"};
  },

  handle_submit: function(e) {
    e.preventDefault()
  },

  render: function() {
    return (
      <div className="commentsForm">
        <h6>Comments</h6>
        <form onSubmit={this.handle_submit}>
          <AutoResizeTextArea name="comment" />
          <input type="submit" value="Post"></input>
        </form>
      </div>
    );
  }
});

module.exports = CommentForm
