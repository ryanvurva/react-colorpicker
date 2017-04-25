import React, { Component } from 'react'
import store from '../store'
import {observer} from 'mobx-react'

@observer
class Preview extends Component {
  render () {
    return <div className='previewSat' style={{backgroundColor: `hsl(${store.hue}, 0%, 50%), hsl(${store.hue}, 100%, 50%)`}} />
  }
}

export default Preview
