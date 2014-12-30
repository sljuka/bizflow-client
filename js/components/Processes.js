React = require('react')
Process = require('./Process')
$ = require('jquery')

var Processes = React.createClass({

  getInitialState: function() {
    return {data: []};
  },

  loadProcessesFromServer: function() {
    $.ajax({
      url: "http://localhost:3000/api/v1/processes",
      dataType: 'json',
      success: function(data) {
        this.setState({data: data.processes});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadProcessesFromServer();
  },

  render: function() {

    var processList = this.state.data.map(function(process) {
      return (
        <Process data={process} />
      );
    });

    return(
      <div className="processes_component">
        <ul>
          <li><a href="#" className="new"><span>+</span></a></li>
          {processList}
        </ul>
      </div>
    );
  }

});

module.exports = Processes
