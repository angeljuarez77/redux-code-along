import React from 'react';
import './App.css';
import {
  ADD_NUMBER,
  addNumber,
} from './actions/mathOperations.js';
import Number from './components/Number';

class App extends React.Component {
  componentDidMount() {
    console.log(ADD_NUMBER);
    const addNumberAction = addNumber(1200);
    console.log(addNumberAction);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Number />
        </header>
      </div>
    );
  }
}

export default App;
