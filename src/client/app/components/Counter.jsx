import React from 'react';
import CounterButton from './CounterButton.jsx';
import CounterValue from './CounterValue.jsx';

class CounterComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.onIncrement = this.onIncrement.bind(this);
  }

  onIncrement (increment) {
    let newLikesCount = this.state.counter + increment;
    this.setState({counter: newLikesCount});
  }

  render() {
    return (
      <div>
        <CounterButton localOnIncrement={this.onIncrement} increment={1} />
        <CounterButton localOnIncrement={this.onIncrement} increment={5} />
        <CounterButton localOnIncrement={this.onIncrement} increment={10} />
        <CounterButton localOnIncrement={this.onIncrement} increment={100} />
        <CounterValue value={this.state.counter} />
      </div>
    );
  }

}

export default CounterComponent;
