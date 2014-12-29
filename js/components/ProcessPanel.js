React = require('react')

ProcessItem = require('./ProcessPanelItem')

var DashboardPanel = React.createClass({

  getInitialState: function() {
    res = {
      data: [],
      processesUrl: "/processes"
    }
    return res
  },
  
  componentDidMount: function() {
    this.loadProcessesFromServer();
  },

  loadProcessesFromServer: function() {
    $.ajax({
      url: this.state.processesUrl,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
        console.log(this.state.data)
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err)
        console.error(this.state.processesUrl, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {

    var processItems = this.state.data.map(function (process) {
      return (
        <ProcessItem process={process} key={process.id} />
      );
    });

    return (
      <div className="process-panel">
        <ul className="process-list">
          {processItems}
        </ul>
      </div>
    );
  }

});

module.exports = DashboardPanel
