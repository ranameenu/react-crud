import React, { Component } from 'react';

class App extends Component {
  render() {
    const flag = false;

    return (
      <div>{2 === '2' ? <h1>Hello React</h1> : <p>Something else!</p>}</div>
    );
  }
}

export default App;
