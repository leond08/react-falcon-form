import React, { Component } from 'react'
import { InputText } from 'react-falcon-form'
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

  customValidation = (e) => {
    if(e.target.value.length == 0) {
        console.log("required fields")
    }
  }

  render () {
    return (
        <div className="row">
        <div className="col-lg">
            <div className="card card-style" id="basicInput">
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
            <div className="card card-style" id="tooltip">
                <div className="card-heading"><h5>Basic Input w/ tooltip</h5></div>
                <div className="card-body">
                    <div className="form-group">
                        <InputText onChange={(e) => this.setState({ value:  e.target.value })}
                            tooltip="Hello I am a tooltip!" tooltipOptions={{
                                position: "top"
                            }} />
                    </div>
                    <p>Code:</p>
                    <figure className="highlight">
                        <code className="prettyprint language-jsx">
                            {`<InputText onChange={(e) => this.setState({ value:  e.target.value })}
                                tooltip="Hello I am a tooltip!" 
                                tooltipOptions={{position: "top"}} />`
                            }
                        </code>
                    </figure>
                </div>
            </div>
            <div className="card card-style" id="inputValidation">
                <div className="card-heading"><h5>Input validation w/ help text</h5></div>
                <div className="card-body">
                <div className="form-group">
                    <InputText 
                        onChange={(e) => this.setState({ value:  e.target.value })}  
                        validationFilter="digit"
                        helpText="Accepts digit only"
                        blockKeys />
                </div>
                <p>Code:</p>
                <figure className="highlight">
                    <code className="prettyprint language-jsx">
                        {`<InputText
                        onChange={(e) => this.setState({ value:  e.target.value })} 
                        validationFilter="digit" 
                        helpText="Accepts digit only"
                        blockKeys />`
                        }
                    </code>
                </figure>
            </div>
            </div>
            <section id="documentation">
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
                    <table className="table table-bordered">
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
                                <td>String|Regex|Function</td>
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
                            <tr>
                                <td>helpText</td>
                                <td>String</td>
                                <td>Show help message</td>
                            </tr>
                            <tr>
                                <td>tooltip</td>
                                <td>String</td>
                                <td>Display tooltip message</td>
                            </tr>
                            <tr>
                                <td>tooltipOptions</td>
                                <td>JSON</td>
                                <td>Option like position; Accepts top, left, bottom, right</td>
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
                    <a href="#tooltip">Basic Input w/ tooltip</a>
                </li>
                <li>
                    <a href="#inputValidation">Input validation w/ help text</a>
                </li>
                <li>
                    <a href="#documentation">Documentation</a>
                </li>
            </ul>
            </section>
        </div>
        </div>
    )
  }
}
