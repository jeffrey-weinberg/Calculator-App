import React, { Component } from "react";
import Buttons from "./buttons";
import Screen from "./screen";
import * as math from 'mathjs';
import "./App.css";

class App extends Component {
  constructor (props) {
    super(props) 

    this.state = {
      input: "0"
    };
  }

  addToInput = val => {
    if (this.state.input === "0") {
      this.setState({input: val});
    } else {
      this.setState({input: this.state.input + val});
    }
  }

  addOperatorToInput = val => {
    if (this.state.input === "0") {
      this.setState({input: "0"})
    } else {
      this.setState({input: this.state.input + val});
    }
  }

  handleClear = () => {
    this.setState({input: "0"})
  }

  handleEqual = () => {
    this.setState({input: math.eval(this.state.input)})
  }

  handleNeg = () => {
    this.setState({input: math.eval(this.state.input * -1)})
  }

  render() {
    return (
      <div className="App">
        
        <div className="button-wrapper">
          <Screen>{this.state.input}</Screen>
          <Buttons handleClick={this.handleClear}>AC</Buttons>
          <Buttons handleClick={this.handleNeg}>+/-</Buttons>
          <Buttons handleClick={this.addToInput}>%</Buttons>
          <Buttons handleClick={this.addOperatorToInput}>/</Buttons>
          <Buttons handleClick={this.addToInput}>7</Buttons>
          <Buttons handleClick={this.addToInput}>8</Buttons>
          <Buttons handleClick={this.addToInput}>9</Buttons>
          <Buttons handleClick={this.addOperatorToInput}>*</Buttons>
          <Buttons handleClick={this.addToInput}>4</Buttons>
          <Buttons handleClick={this.addToInput}>5</Buttons>
          <Buttons handleClick={this.addToInput}>6</Buttons>
          <Buttons handleClick={this.addOperatorToInput}>-</Buttons>
          <Buttons handleClick={this.addToInput}>1</Buttons>
          <Buttons handleClick={this.addToInput}>2</Buttons>
          <Buttons handleClick={this.addToInput}>3</Buttons>
          <Buttons handleClick={this.addOperatorToInput}>+</Buttons>
          <Buttons handleClick={this.addToInput}>0</Buttons>
          <Buttons handleClick={this.addToInput}>.</Buttons>
          <Buttons handleClick={this.handleEqual}>=</Buttons>
        </div>
      </div>
    );
  }
}

export default App;
