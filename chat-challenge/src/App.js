import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentMessage: ""
    };

    this.changeCurrentMessage = this.changeCurrentMessage.bind(this);
  }

  changeCurrentMessage(event) {
    this.setState({currentMessage: event.target.value});
  }


  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        <div className ="input-field">
          <input type ="text" className ="validate" value ={this.state.currentMessage} onChange ={this.changeCurrentMessage}></input>
          <label data-error ="you must enter text"> Current Message </label>
        </div>

      </div>
    );
  }
}

export default App;
