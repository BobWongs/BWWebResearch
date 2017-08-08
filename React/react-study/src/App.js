import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Top-title">
        <div className="Title-text">To Do List</div>
        </div>
      <div className="Input-container">
        <form action="">
          <input className="Input-field" type="text" placeholder="Please input here" />
          <button className="Add-button">Add</button>
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