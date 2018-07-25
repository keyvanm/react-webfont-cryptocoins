import React, { Component } from 'react'

import CryptoIcon from 'react-webfont-cryptocoins'

export default class App extends Component {
  render () {
    return (
      <div>
        <div>
          <h1><CryptoIcon coin="BTC" /></h1>
          <h1><CryptoIcon coin="ETH" /></h1>
          <h1><CryptoIcon coin="LTC" /></h1>
        </div>
      </div>
    )
  }
}
