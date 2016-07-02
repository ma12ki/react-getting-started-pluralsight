import React from 'react';

class CounterButton extends React.Component {

  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
  }

  static get propTypes() {
    return {
      increment: React.PropTypes.number.isRequired,
      localOnIncrement: React.PropTypes.func.isRequired
    };
  }

  onIncrement () {
    this.props.localOnIncrement(this.props.increment);
  }

  render() {
    return (
      <button onClick={this.onIncrement}>+{this.props.increment}</button>
    );
  }

}

export default CounterButton;
