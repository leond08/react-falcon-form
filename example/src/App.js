import React, { Component } from 'react'
import { InputText, Password } from 'react-falcon-form'
import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {

  constructor() {
    super()

    this.state = {
      error: null
    }
  }

  callBackFunction = (e, error) => {
    if (!error) {
      this.setState({
        error: "this is an error",
        value: null
      })
    }
  }

  render () {
    return (
      <div className="container">
          <div className="form-group">
              <label htmlFor="exampleBasicInputText">Basic Input Text</label>
              <InputText onChange={(e) => this.setState({ value:  e.target.value })} 
                  onInput={this.callBackFunction} 
                  validationFilter="alphanum" />
              <span>{this.state.error}</span>
              <label htmlFor="examplePassword">Password</label>
              <Password validationFilter="digit" onInput={this.callBackFunction}/>
          </div>
      </div>
    )
  }
}
