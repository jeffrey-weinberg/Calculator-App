import React, { Component } from 'react';
import './App.css';

let operators = ["/", "*", "+", "-", "="]

let func = ["AC", "+/-", "%"]

const isInt = val => {
  if (operators.includes(val))
    return "operator"
  else if (func.includes(val))
    return "function"
  else if (val === '0' )
    return "zero"
  else
    return "integer"
}

const Buttons = props => <div className={`button ${
  isInt(props.children)}`} onClick={() => props.handleClick(props.children)}>
{props.children}</div>

export default Buttons;