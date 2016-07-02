import React from 'react';
import 'bootstrap';
import 'bootstrap-css-only';
import StarsFrame from './StarsFrame.jsx';
import ButtonFrame from './ButtonFrame.jsx';
import AnswerFrame from './AnswerFrame.jsx';
import NumbersFrame from './NumbersFrame.jsx';
import DoneFrame from './DoneFrame.jsx';
import './style.css';

class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.getDefaultState();
    this.selectNumber = this.selectNumber.bind(this);
    this.deselectNumber = this.deselectNumber.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.acceptAnswer = this.acceptAnswer.bind(this);
    this.redraw = this.redraw.bind(this);
    this.reset = this.reset.bind(this);
    this.updateDoneStatus = this.updateDoneStatus.bind(this);
  }

  getDefaultState() {
    return {
      selectedNumbers: [],
      usedNumbers: [],
      numberOfStars: this.getRandomNumberOfStars(),
      correct: null,
      redraws: 5,
      doneStatus: null
    };
  }

  getRandomNumberOfStars() {
    return Math.floor(Math.random() * 9) + 1;
  }

  selectNumber(number) {
    if (!this.state.selectedNumbers.includes(number)) {
      this.setState({
        selectedNumbers: this.state.selectedNumbers.concat(number),
        correct: null
      });
    }
  }

  deselectNumber(numberToDeselect) {
    this.setState({
      selectedNumbers: this.state.selectedNumbers.filter((number) => {
        return number != numberToDeselect;
      }),
      correct: null
    });
  }

  checkAnswer() {
    let correct = this.state.numberOfStars === this.getSumOfSelectedNumbers();
    this.setState({ correct });
  }

  acceptAnswer() {
    let usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
    this.setState({
      selectedNumbers: [],
      usedNumbers,
      correct: null,
      numberOfStars: this.getRandomNumberOfStars()
    }, () => {
      this.updateDoneStatus();
    });
  }

  getSumOfSelectedNumbers() {
    return this.state.selectedNumbers.reduce((a, b) => { return a + b; }, 0);
  }

  updateDoneStatus() {
    if (this.state.usedNumbers.length === 9) {
      this.setState({ doneStatus: 'U win :3' });
      return;
    }
    if (this.state.redraws === 0 && !this.hasPossibleSolutions()) {
      this.setState({ doneStatus: 'Uz ded. U haz 2 fal down :<' });
      return;
    }
  }

  hasPossibleSolutions() {
    // requires calculating all combinations of available numbers and checking if any of them match the number of stars
    return false;
  }

  redraw() {
    if (this.state.redraws > 0) {
      this.setState({
        numberOfStars: this.getRandomNumberOfStars(),
        correct: null,
        selectedNumbers: [],
        redraws: this.state.redraws - 1
      }, () => {
        this.updateDoneStatus();
      });
    }
  }

  reset() {
    this.setState(this.getDefaultState());
  }

  render() {
    let bottomFrame;

    if (this.state.doneStatus) {
      bottomFrame = (
        <DoneFrame doneStatus={this.state.doneStatus}
                   reset={this.reset} />
      );
    } else {
      bottomFrame = (
        <NumbersFrame selectedNumbers={this.state.selectedNumbers}
                      usedNumbers={this.state.usedNumbers}
                      selectNumber={this.selectNumber} />
      );
    }

    return (
      <div id="game">
        <h1>Play Nine</h1>
        <hr />
        <div className="clearfix">
          <StarsFrame numberOfStars={this.state.numberOfStars} />
          <ButtonFrame selectedNumbers={this.state.selectedNumbers}
                       checkAnswer={this.checkAnswer}
                       acceptAnswer={this.acceptAnswer}
                       redraw={this.redraw}
                       redraws={this.state.redraws}
                       correct={this.state.correct} />
          <AnswerFrame selectedNumbers={this.state.selectedNumbers}
                       deselectNumber={this.deselectNumber} />
        </div>
        {bottomFrame}     
      </div>
    );
  }
}

export default Game;
