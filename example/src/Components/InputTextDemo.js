import React, { Component } from 'react'
import { InputText, Password } from 'react-falcon-form'
import { Link } from "react-router-dom";

export default class InputTextDemo extends Component {

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
        <div className="row">
        <div className="col-lg">
            <div className="card card-style">
                <div className="card-heading"><h5>Basic Input</h5></div>
                <div className="card-body">
                    <div className="form-group">
                        <InputText onChange={(e) => this.setState({ value:  e.target.value })} />
                    </div>
                    <p>Code:</p>
                    <figure className="highlight">
                        <code className="prettyprint language-jsx">
                            {`<InputText onChange={(e) => this.setState({ value:  e.target.value })} />`}
                        </code>
                    </figure>
                </div>
            </div>

            <div className="card card-style">
                <div className="card-heading"><h5>Input with validation</h5></div>
                <div className="card-body">
                <div className="form-group">
                    <InputText 
                        onChange={(e) => this.setState({ value:  e.target.value })} 
                        onInput={this.callBackFunction} 
                        validationFilter="digit"
                        blockKeys />
                </div>
                <p>Code:</p>
                <figure className="highlight">
                    <code className="prettyprint language-jsx">
                        {`<InputText
                        onChange={(e) => this.setState({ value:  e.target.value })} 
                        validationFilter="digit" 
                        blockKeys />`
                        }
                    </code>
                </figure>
            </div>
            </div>
            <section>
                <h1>Documentation</h1>
                <div className="documentation">
                    <h4>Import</h4>
                    <figure className="highlight">
                        <code className="prettyprint language-jsx">
                            {`import {InputText} from 'react-falcon-form'`}
                        </code>
                    </figure>
                </div>
                <div className="documentation">
                    <h4>Validation Filter</h4>
                    <p>InputText has a built-in validation filtering support. See <Link to="/validationFilter">ValidationFilter.</Link></p>
                </div>
                <div className="documentation">
                    <h4>Properties</h4>
                    <p>InputText passes any valid attribute of input element.</p>
                    <table class="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>validationFilter</td>
                                <td>String|Regex</td>
                                <td>Specify the validation to be used.</td>
                            </tr>
                            <tr>
                                <td>blockKeys</td>
                                <td>Boolean</td>
                                <td>When enabled mask the invalid characters. Default to false.</td>
                            </tr>
                            <tr>
                                <td>onInput</td>
                                <td>Function</td>
                                <td>Return the validation status.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="documentation">
                    <h4>Styling</h4>
                    <p>InputText uses Bootstrap 4 for as its default styling.
                    You can customize it by passing your custom style in <strong>style</strong> or in <strong>className</strong>.
                    </p>
                </div>
            </section>
        </div>  
        <div className="col-sm-2">
            <section className="section">
            Overview
            <ul className="section-nav">
                <li>
                    <a href="#basicInput">Basic Input</a>
                </li>
                <li>
                    <a href="#inputValidation">Input with validation</a>
                </li>
            </ul>
            </section>
        </div>
        </div>
    )
  }
}
