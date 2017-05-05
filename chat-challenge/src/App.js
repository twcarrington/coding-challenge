import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase";
import {config} from "./FirebaseConfig.js";

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

  handleSubmit(event) {
    firebase.database().ref("/user1").set({
      message: this.state.currentMessage
    });
  }

  componentDidMount(
    firebase.database().ref("/").set({
      message: "blahblahblah"
    });
  )

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input type="text" className="validate" value={this.state.currentMessage} onChange={this.changeCurrentMessage}></input>
            <label data-error="you must enter text"></label>
          </div>

          <br></br>

          <button type="submit" name="action"> send current message </button>
        </form>
      </div>
    );
  }
}

export default App;
