import React from 'react';

class StarsFrame extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  static get propTypes() {
    return {
      numberOfStars: React.PropTypes.number.isRequired
    };
  }

  render() {
    let numberOfStars = this.props.numberOfStars;
    let stars = [];

    for (let i = 0; i < numberOfStars; i++) {
      stars.push(
        <span key={i} className="glyphicon glyphicon-star"></span>
      );
    }

    return (
      <div id="stars-frame">
        <div className="well">
          {stars}
        </div>
      </div>
    );
  }
}

export default StarsFrame;
