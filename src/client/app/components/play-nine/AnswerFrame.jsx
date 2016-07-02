import React from 'react';

class AnswerFrame extends React.Component {

  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      selectedNumbers: React.PropTypes.array.isRequired
    };
  }

  render() {
    let selectedNumbers = this.props.selectedNumbers.map((number) => {
      return (
        <div key={number} className="number">{number}</div>
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
