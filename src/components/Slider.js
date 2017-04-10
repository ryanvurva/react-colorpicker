import React, { Component } from 'react'

class Slider extends Component {
  render () {
    return <div className='sliders'>
      <div className='hue'>
        <div className='info'><p>HUE</p><div className='preview previewHue' /></div>
        <input type='range' onInput={this.props._HueChange} max='360' />
      </div>
      <div className='sat'>
        <div className='info'><p>SATURATION</p><div className='preview previewSat' /></div>
        <input type='range' onInput={this.props._SatChange} max='100' />
      </div>
      <div className='light'>
        <div className='info'><p>LIGHTNESS</p><div className='preview previewLight' /></div>
        <input type='range' onInput={this.props._LightChange} max='100' />
      </div>
      <div className='alpha'>
        <div className='info'><p>ALPHA</p><div className='preview previewAlpha' /></div>
        <input type='range' onInput={this.props._AlphaChange} max='1' step='0.01' />
      </div>
    </div>
  }
}

export default Slider
