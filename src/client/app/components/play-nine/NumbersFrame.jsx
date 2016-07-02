import React from 'react';

class NumbersFrame extends React.Component {

  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      selectedNumbers: React.PropTypes.array.isRequired,
      clickNumber: React.PropTypes.func.isRequired
    };
  }

  render() {
    let numbers = [],
      selectedNumbers = this.props.selectedNumbers,
      clickNumber = this.props.clickNumber;

    for (let i = 1; i <= 9; i++) {
      let className = 'number';
      if (selectedNumbers.includes(i)) {
        className += ' selected';
      }
      numbers.push(
        <div key={i} className={className} onClick={clickNumber.bind(null, i)}>{i}</div>
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
