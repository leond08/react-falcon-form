import React, { Component } from 'react'

import InputText from 'react-falcon-form'

export default class App extends Component {

  constructor() {
    super()

    this.state = {
      error: null
    }
  }

  callBackFunction = childResponse => {
    if (!childResponse) {
      this.setState({
        error: "this is an error"
      })
    }
  }

  render () {
    return (
      <div>
        <InputText getError={this.callBackFunction}  validationFilter="email" />
        <span>{this.state.error}</span>
      </div>
    )
  }
}
