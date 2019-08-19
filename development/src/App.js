import React, { Component } from 'react'
import {Calendar, InputText} from 'react-falcon-form'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
              <div className="col-sm">
                <div>
                  <br /> <br />
                  <Calendar />
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
