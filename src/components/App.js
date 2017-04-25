import React, { Component } from 'react'
import Swatch from './Swatch'
import Code from './Code'
import Slider from './Slider'
import store from '../store'
import {observer} from 'mobx-react'

@observer
class App extends Component {
  render () {
    return <div className='colorpicker'>
      <div>
        <h1>An HSL Color Picker</h1>
      </div>
      <Swatch hue={store.hue} saturation={store.saturation} lightness={store.lightness} alpha={store.alpha} />
      <Code />
      <Slider />
    </div>
  }
}

export default App
