React = require('react')
$ = require('jquery')

var AutoResizeTextarea = React.createClass({

  resize : function() {
    $(this.getDOMNode()).css({'height':'auto','overflow-y':'hidden'}).height(this.getDOMNode().scrollHeight);
  },

  componentDidMount: function() {
    this.resize()
  },

  render: function() {  
    return (
      <textarea placeholder="comment" rows="1" cols="50" name={this.props.name} onInput={this.resize}></textarea>
    );
  }

});

module.exports = AutoResizeTextarea
