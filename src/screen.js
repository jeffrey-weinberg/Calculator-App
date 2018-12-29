import React, { Component } from 'react';
import './App.css';

class Screen extends Component {
  render() {
    return (
      <div className="screen">
        {this.props.children}
      </div>
    );
  }
}

export default Screen;