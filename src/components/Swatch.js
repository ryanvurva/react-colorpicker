import React, { Component } from 'react'

class Swatch extends Component {
  render () {
    return <div className='colordisplay'>
      <div className='swatch' style={{backgroundColor: `hsla(${this.props.hue}, ${this.props.saturation}%, ${this.props.lightness}%, ${this.props.alpha})`}} />
    </div>
  }
}

export default Swatch
