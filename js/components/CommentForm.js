React = require('react')

AppActions = require('../actions/app-actions')

var CommentForm = React.createClass({

  getInitialState: function() {
    return {commentPostUrl: "/process_comments"};
  },

  handle_submit: function(e) {
    e.preventDefault()
    AppActions.addComment({
      text: "bla",
      author: "buldozer"
    })
  },

  render: function() {
    return (
      <div className="commentsForm">
        <h6>Comments</h6>
        <form onSubmit={this.handle_submit}>
          <AutoResizeTextarea name="comment" />
          <input type="submit" value="Post"></input>
        </form>
      </div>
    );
  }
});

module.exports = CommentForm
