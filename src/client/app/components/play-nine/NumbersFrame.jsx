import React from 'react';

class NumbersFrame extends React.Component {

  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      selectedNumbers: React.PropTypes.array.isRequired,
      usedNumbers: React.PropTypes.array.isRequired,
      selectNumber: React.PropTypes.func.isRequired
    };
  }

  render() {
    let numbers = [],
      selectedNumbers = this.props.selectedNumbers,
      usedNumbers = this.props.usedNumbers,
      selectNumber = this.props.selectNumber;

    for (let i = 1; i <= 9; i++) {
      let className = 'number';
      if (selectedNumbers.includes(i)) {
        className += ' selected';
      } else if (usedNumbers.includes(i)) {
        className += ' used';
      }
      numbers.push(
        <div key={i} className={className} onClick={selectNumber.bind(null, i)}>{i}</div>
      );
    }

    return (
      <div id="numbers-frame">
        <div className="well">
          {numbers}
        </div>
      </div>
    );
  }
}

export default NumbersFrame;
