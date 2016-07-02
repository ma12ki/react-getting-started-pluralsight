import React from 'react';

class DoneFrame extends React.Component {

  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      doneStatus: React.PropTypes.string.isRequired,
      reset: React.PropTypes.func.isRequired
    };
  }

  render() {
    return (
      <div id="done-frame">
        <div className="well text-center">
          <h2>{this.props.doneStatus}</h2>
          <button className="btn btn-default" onClick={this.props.reset}>Play again!</button>
        </div>
      </div>
    );
  }
}

export default DoneFrame;
