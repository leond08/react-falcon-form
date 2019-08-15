import React, { Component } from 'react'

import InputText from './Components/InputText/InputText'

export default class App extends Component {

  constructor() {
    super()

    this.state = {
      error: null
    }
  }

  callBackFunction = childResponse => {
    if (!childResponse) {
      console.log(childResponse)
      this.setState({
        error: "this is an error"
      })
    }
  }

  render () {
    return (
      <div>
        <InputText onChange={this.callBackFunction}  validationFilter="email" />
        <span>{this.state.error}</span>
      </div>
    )
  }
}