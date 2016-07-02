import React from 'react';

class ButtonFrame extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="button-frame">
        <button className="btn btn-primary btn-lg">=</button>
      </div>
    );
  }
}

export default ButtonFrame;
