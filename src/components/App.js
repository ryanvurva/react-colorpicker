import React, { Component } from 'react'
import Swatch from './Swatch'
import Code from './Code'
import Slider from './Slider'

class App extends Component {
  state = {
    hue: 0,
    saturation: 50,
    lightness: 50,
    alpha: 1
  }

  _HueChange = (event) => {
    this.setState({
      hue: event.target.value
    })
  }
  _SatChange= (event) => {
    this.setState({
      saturation: event.target.value
    })
  }
  _LightChange= (event) => {
    this.setState({
      lightness: event.target.value
    })
  }
  _AlphaChange= (event) => {
    this.setState({
      alpha: event.target.value
    })
  }

  render () {
    return <div className='colorpicker'>
      <div>
        <h1>An HSL Color Picker</h1>
      </div>
      <Swatch hue={this.state.hue} saturation={this.state.saturation} lightness={this.state.lightness} alpha={this.state.alpha} />
      <Code hue={this.state.hue} saturation={this.state.saturation} lightness={this.state.lightness} alpha={this.state.alpha} />
      <Slider _HueChange={this._HueChange} _SatChange={this._SatChange} _LightChange={this._LightChange} _AlphaChange={this._AlphaChange} />
    </div>
  }
}

export default App
