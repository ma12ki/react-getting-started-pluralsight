import React from 'react';

class AnswerFrame extends React.Component {

  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      selectedNumbers: React.PropTypes.array.isRequired,
      deselectNumber: React.PropTypes.func.isRequired
    };
  }

  render() {
    let deselectNumber = this.props.deselectNumber;
    let selectedNumbers = this.props.selectedNumbers.map((number) => {
      return (
        <div key={number} className="number" onClick={deselectNumber.bind(null, number)}>{number}</div>
      );
    });

    return (
      <div id="answer-frame">
        <div className="well">
          {selectedNumbers}
        </div>
      </div>
    );
  }
}

export default AnswerFrame;
