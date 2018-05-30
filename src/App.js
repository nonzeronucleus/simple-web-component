import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    clicks: 0
  }

  addClick = () => {
    const clicks=this.state.clicks+1
    this.setState({clicks})
    this.props.onClick(clicks);
  }

  render() {
    const name = this.props.name || "";

    return (
      <button onClick={this.addClick}>Press Me {name}, {this.state.clicks}</button>
    );
  }
}

export default App;
