import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const titleView = (
      <div className="Top-title">
        <div className="Title-text">To Do List</div>
      </div>
    );
    
    const inputView = (
      <div className="Input-container">
        <input id="Input-field-id" className="Input-field" type="text" placeholder="Please input here" />
        <button className="Add-button" onClick={this._onClick}>Add</button>
      </div>
    );

    // const listView = (
    //   <div>
    //     <ul className="List-view">
          
    //       <li className="List-item">
    //         <span className="List-item-title">First</span>
    //         <button className="List-item-button">Delete</button>
    //         </li>
    //       <li>Second</li>
    //       <li>Third</li>
    //     </ul>
    //   </div>
    // );

    var listView = this.getToDoList()
    console.log(listView)

    // const testView = (
    //   <div className="My-div-container">
    //     <span className="My-left-element">Left element</span>
    //     <span className="My-right-element">Right element</span>
    //   </div>
    // );

    return (
      <div className="App">
        {titleView}
        {inputView}
        {listView}
      </div>
    );
  }

  constructor() {
    super()
    this.addedList = ['First', 'Second']
    this._onClick = this._onClick.bind(this)
    this.getToDoList = this.getToDoList.bind(this)
  }

  _onClick() {
    let element = document.getElementById('Input-field-id')
    let text = element.value
    console.log('Inputed text: ' + text)

    this.addedList.push(text)
    console.log('Added list: ' + this.addedList)
  }

  getToDoList() {
    const listItems = this.addedList.map((item) => 
      <li>{item}</li>
    )
    return (
      <ul>{listItems}</ul>
    );
  }
}

export default App;