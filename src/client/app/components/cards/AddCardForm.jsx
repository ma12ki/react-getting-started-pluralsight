import React from 'react';

class AddCardForm extends React.Component {

  constructor(props) {
    super(props);
    this._input = '';
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static get propTypes() {
    return {
      addCard: React.PropTypes.func.isRequired
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCard(this._input.value);
    this._input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="github login" ref={(i) => this._input = i} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddCardForm;
