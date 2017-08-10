import React, { Component } from 'react';
import './App.css';

const deleteButtonIdPrefix = 'Delete-button-id-prefix'

class App extends Component {
  render() {
    const titleView = (
      <div className="Top-title">
        <div className="Title-text">To Do List</div>
      </div>
    )
    
    const inputView = (
      <div className="Input-container">
        <input id="Input-field-id" className="Input-field" type="text" placeholder="Please input here" />
        <button className="Add-button" onClick={this.addToDoList}>Add</button>
      </div>
    )

    return (
      <div className="App">
        {titleView}
        {inputView}
        {this.state.listView}
      </div>
    )
  }

  constructor() {
    super()
    this.addedList = ['First', 'Second']

    this.addToDoList = this.addToDoList.bind(this)
    this.getToDoList = this.getToDoList.bind(this)
    this.deleteToDoItem = this.deleteToDoItem.bind(this)
    this.reloadListData = this.reloadListData.bind(this)

    this.state = {
      listView: this.getToDoList()
    }
  }

  addToDoList() {
    let element = document.getElementById('Input-field-id')
    let text = element.value
    console.log('Inputed text: ' + text)

    if (text) {
      this.addedList.push(text)
      this.reloadListData();
    }
  }

  deleteToDoItem(e) {
    console.log('e: ' + e.target.id)
    let idStr = e.target.id
    let indexIdStr = idStr.substr(deleteButtonIdPrefix.length)
    this.addedList.splice(Number(indexIdStr), 1)
    this.reloadListData()
  }

  reloadListData() {
    console.log('Added list: ' + this.addedList)
    this.setState({
        listView: this.getToDoList()
      })
  }

  getToDoList() {
    const listItems = this.addedList.map((item, index) => {
      let buttonId = deleteButtonIdPrefix + index
      return (
        <li className="List-item">
        <span className="List-item-title">{item}</span>
        <button id={buttonId} className="List-item-button" onClick={this.deleteToDoItem}>Delete</button>
        </li>
      )
    }
    )
    return (
      <ul className="List-view">{listItems}</ul>
    );
  }
}

export default App;