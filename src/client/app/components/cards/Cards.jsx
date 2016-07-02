import React from 'react';
import Card from './Card.jsx';
import AddCardForm from './AddCardForm.jsx';

class Cards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      logins: []
    };
    this.addCard = this.addCard.bind(this);
  }

  addCard(login) {
    this.setState({ logins: this.state.logins.concat(login) });
  }

  render() {
    let cards = this.state.logins.map((login) => {
      return (<Card key={login} login={login} />);
    });

    return (
      <div>
        <AddCardForm addCard={this.addCard} />
        {cards}
      </div>
    );
  }
}

export default Cards;
