import React from 'react';

class ButtonFrame extends React.Component {

  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      selectedNumbers: React.PropTypes.array.isRequired,
      checkAnswer: React.PropTypes.func.isRequired,
      acceptAnswer: React.PropTypes.func.isRequired,
      redraw: React.PropTypes.func.isRequired,
      redraws: React.PropTypes.number.isRequired,
      correct: React.PropTypes.bool
    };
  }

  render() {
    let checkDisabled, checkButton,
      redrawDisabled, redrawButton,
      correct = this.props.correct;

    switch (correct) {
      case true:
        checkButton = (
          <button className="btn btn-success btn-lg"
                  onClick={this.props.acceptAnswer}>
           <span className="glyphicon glyphicon-ok"></span>
          </button>
        );
        break;
      case false:
        checkButton = (
          <button className="btn btn-danger btn-lg">
           <span className="glyphicon glyphicon-remove"></span>
          </button>
        );
        break;
      default:
        checkDisabled = this.props.selectedNumbers.length === 0;
        checkButton = (
          <button className="btn btn-primary btn-lg" 
                  disabled={checkDisabled}
                  onClick={this.props.checkAnswer}>=</button>
        );
    }

    redrawDisabled = this.props.redraws === 0;

    redrawButton = (
      <button className="btn btn-warning btn-xs" disabled={redrawDisabled}
              onClick={this.props.redraw}>
        <span className="glyphicon glyphicon-refresh"></span>
        &nbsp;{this.props.redraws}
      </button>
    );


    return (
      <div id="button-frame">
        {checkButton}
        <br /><br />
        {redrawButton}
      </div>
    );
  }
}

export default ButtonFrame;
