import React, { Component } from 'react';
import Pong from './component/Pong.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pong>Pong</Pong>
      </div>
    );
  }
}

export default App;
