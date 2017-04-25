import React, { Component } from 'react'
import Preview from './Preview'
import store from '../store'
import {observer} from 'mobx-react'

@observer
class Slider extends Component {
  _HueChange = (event) => {
    store.hue = event.target.value
  }
  _SatChange= (event) => {
    store.saturation = event.target.value
  }
  _LightChange= (event) => {
    store.lightness = event.target.value
  }
  _AlphaChange= (event) => {
    store.alpha = event.target.value
  }
  render () {
    return <div className='sliders'>
      <div className='hue'>
        <div className='info'><p>HUE</p></div>
        <input type='range' onInput={this._HueChange} max='360' />
      </div>
      <div className='sat'>
        <div className='info'><p>SATURATION</p></div>
        <input type='range' onInput={this._SatChange} max='100' />
      </div>
      <div className='light'>
        <div className='info'><p>LIGHTNESS</p></div>
        <input type='range' onInput={this._LightChange} max='100' />
      </div>
      <div className='alpha'>
        <div className='info'><p>ALPHA</p></div>
        <input type='range' onInput={this._AlphaChange} max='1' step='0.01' />
      </div>
    </div>
  }
}

export default Slider
