import React, { Component } from 'react'

import InputText from './Components/InputText/InputText'

export default class App extends Component {

  constructor() {
    super()

    this.state = {
      error: null
    }
  }

  callBackFunction = (e, error) => {
    if (!error) {
      console.log(error)
      this.setState({
        error: "this is an error",
        value: null
      })
    }
  }

  render () {
    return (
      <div>
        <InputText onChange={(e) => this.setState({ value:  e.target.value })} 
            onInput={this.callBackFunction} 
            validationFilter={/[a-z_]/i} />
        <span>{this.state.error}</span>
      </div> 
    )
  }
}