import React, { Component } from 'react'
import {Calendar, InputText} from 'react-falcon-form'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
              <div className="col-sm">
                <div>
                  <br /> <br />
                  <Calendar value={this.state.value} onChange={e => this.setState({value: e.value})} />
                  <br /> <br />
                  <InputText />
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
