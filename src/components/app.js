import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  renderItems = function() {
    if(this.state.active) {
      return(
        <Clock/>
      )
    } else {
      return (
        Button('Generate Countdown', () => this.setState({active: true}))
      )
    }

  }.bind(this);

  render() {
    return (
      <div className='grid'>

        <h1 className='grid__title'>Birthday Countown</h1>
        <div className='grid__skew-dark'></div>
        <div className='grid__skew-light'></div>

        <Picker/>
        {this.renderItems()}
      </div>
    );
  }
}