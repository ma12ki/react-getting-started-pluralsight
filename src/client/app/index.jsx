import React from 'react';
import {render} from 'react-dom';
import Counter from './components/Counter.jsx';
import Cards from './components/cards/Cards.jsx';
import Game from './components/play-nine/Game.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <Counter />
        <hr />
        <hr />
        <Cards />
        <hr />
        <hr />
        <Game />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
