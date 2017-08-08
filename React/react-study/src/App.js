import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Top-title">To Do List</div>
      <div className="Input-view">
        <form action="">
          Input:
          <input type="text" />
          <button>Add</button>
        </form>
      </div>
      <div className="List-view">
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
