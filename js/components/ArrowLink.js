React = require('react')

var ArrowLink = React.createClass({

  handleClick: function(e) {
    this.props.toggleProcess(e)
  },

  render: function() {
    return (
      <a href="#" className={"arrow " + this.props.arrowClass} onClick={this.handleClick}></a>
    );
  }

});

module.exports = ArrowLink