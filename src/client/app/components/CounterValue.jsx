import React from 'react';

class CounterValue extends React.Component {

  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      value: React.PropTypes.number.isRequired
    };
  }

  render() {
    return (
      <p>{this.props.value}</p>
    );
  }

}

export default CounterValue;
