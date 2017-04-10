import React, { Component } from 'react'

class Code extends Component {
  render () {
    if (this.props.alpha < 1) {
      return <div className='code'>
        <span>{`hsla(${this.props.hue}, ${this.props.saturation}, ${this.props.lightness}, ${this.props.alpha})`}</span>
      </div>
    } else {
      return <div className='code'>
        <span>{`hsl(${this.props.hue}, ${this.props.saturation}, ${this.props.lightness})`}</span>
      </div>
    }
  }
}

export default Code
