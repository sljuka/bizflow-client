React = require('react')

var Processes = React.createClass({

  render: function() {
    return(
      <div className="processes_component">
        <ul>
          <li><a href="#" className="new"><span>+</span></a></li>
          <li>
            <a href="#">
            <div className="process_title"><span className="title">some_process1</span></div>
            <div className="brief">
              <div><label>block:</label><span className="status">block1</span></div>
              <div><label>requester:</label><span className="requester">Sam Tarley</span></div>
              <div><label>started at:</label><span className="requester">Sam Tarley</span></div>
            </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="process_title"><span className="title">some_process2</span></div>
              <div className="brief">
                <div><label>block:</label><span className="status">block12</span></div>
                <div><label>requester:</label><span className="requester">Sam Tarley</span></div>
                <div><label>started at:</label><span className="requester">Sam Tarley</span></div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }

});

module.exports = Processes
