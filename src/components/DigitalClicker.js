// Code DigitalClicker Component Here

import React from 'react'
import ReactDOM from 'react-dom'

class DigitalClicker extends React.Component {
  constructor(){

    super()
    this.state = {
      timesClicked: 0
      }
    }
    incrementButton = () => {
      this.setState({
        timesClicked: this.state.timesClicked + 1
      },() => console.log(this.state.timesClicked))

  }
  render(){

    return (
      <button onClick={this.incrementButton}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
