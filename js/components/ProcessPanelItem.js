React = require('react')
ArrowLink = require('./ArrowLink')
ProcessPanelItemDetails = require('./ProcessPanelItemDetails')
CommentsSection = require('./CommentSection')

var ProcessPanelItem = React.createClass({

  getInitialState: function() {
    return {
      open: false
    }
  },

  handleClick: function(event) {
    this.setState({open: !this.state.open});
  },

  render: function() {
    var clss = this.state.open ? 'open' : 'close'
    var content
    if(this.state.open) {
      content = (
        <div className="process-panel-content">
          <ProcessPanelItemDetails process={this.props.process} />
          <CommentsSection process={this.props.process} />
        </div>
      )
    } else {
      content = <span className="closed-process" onClick={this.handleClick}>{this.props.process.process_type}</span>
    }
    return (
      <div className={ "panel-item " + clss }>
        <ArrowLink href="#" arrowClass={clss} toggleProcess={this.handleClick} />
        {content}
      </div>
    );
  }

});

module.exports = ProcessPanelItem
