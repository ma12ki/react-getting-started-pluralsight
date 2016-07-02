import React from 'react';
import 'bootstrap';
import 'bootstrap-css-only';
import StarsFrame from './StarsFrame.jsx';
import ButtonFrame from './ButtonFrame.jsx';
import AnswerFrame from './AnswerFrame.jsx';
import NumbersFrame from './NumbersFrame.jsx';
import './style.css';

class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedNumbers: [],
      numberOfStars: Math.floor(Math.random() * 9) + 1
    };
    this.clickNumber = this.clickNumber.bind(this);
  }

  clickNumber(number) {
    if (!this.state.selectedNumbers.includes(number)) {
      this.setState({ selectedNumbers: this.state.selectedNumbers.concat(number)});
    }
  }

  render() {
    return (
      <div id="game">
        <h1>Play Nine</h1>
        <hr />
        <div className="clearfix">
          <StarsFrame numberOfStars={this.state.numberOfStars} />
          <ButtonFrame />
          <AnswerFrame selectedNumbers={this.state.selectedNumbers} />
        </div>
        <NumbersFrame selectedNumbers={this.state.selectedNumbers}
                      clickNumber={this.clickNumber} />
      </div>
    );
  }
}

export default Game;
