import React, { Component } from 'react'
import store from '../store'
import {observer} from 'mobx-react'

@observer
class Swatch extends Component {
  render () {
    return <div className='colordisplay'>
      <div className='swatch' style={{backgroundColor: store.color}} />
    </div>
  }
}

export default Swatch
