import React, { Component } from 'react'
import store from '../store'
import {observer} from 'mobx-react'

@observer
class Code extends Component {
  render () {
    if (this.props.alpha < 1) {
      return <div className='code'>
        <span>{store.color}</span>
      </div>
    } else {
      return <div className='code'>
        <span>{store.color}</span>
      </div>
    }
  }
}

export default Code
