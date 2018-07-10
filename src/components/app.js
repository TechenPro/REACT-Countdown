import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import changeDate from './changeDate';
import LargeText from './largeText'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  renderItems = function() {
    if(this.state.active) {
      return [
        <Clock/>,
        changeDate('Change Date', () => this.setState({active: false})),
        LargeText('04/03'),
        <label className='grid__remaining'>Remaining until your Birthday!</label>
      ]
    } else {
      return [
        <Picker/>,
        Button('Generate Countdown', () => this.setState({active: true}))
      ]
    }

  }.bind(this);

  render() {
    return (
      <div className='grid'>
        <h1 className='grid__title'>Birthday Countown</h1>
        <div className='grid__skew-dark-one'></div>
        <div className='grid__skew-dark-two'></div>
        <div className='grid__skew-light'></div>

        {this.renderItems()}
      </div>
    );
  }
}
