React = require('react')

var Comment = React.createClass({
  render: function() {
    return (
      <li className="comment">
        <span>{this.props.comment.user}</span>
        <p>
          {this.props.comment.text}
        </p>
      </li>
    );
  }
});

module.exports = Comment
