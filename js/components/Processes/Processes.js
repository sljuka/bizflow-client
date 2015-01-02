React = require('react')
ProcessLink = require('./ProcessLink')
$ = require('jquery')

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

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
        <ProcessLink data={process} key={process.id} />
      );
    });

    return(
      <div className="processes_component">
        <ul className="processes_list">
          <li key="0"><a href="#" className="new"><span>+</span></a></li>
          {processList}
        </ul>
        <RouteHandler/>
      </div>
    );
  }

});

module.exports = Processes
