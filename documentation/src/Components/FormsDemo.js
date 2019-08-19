import React, { Component } from 'react'
import { InputText, Form, Password } from 'react-falcon-form'

export default class FormsDemo extends Component {

  constructor() {
    super()

    this.state = {
        result: null
    }
  }

  render() {
    let json = this.state.result ? JSON.stringify(this.state.result) : ''
    return (
        <div className="row">
                <div className="col-lg">
                    <div className="card card-style" id="basicInput">
                        <div className="card-heading"><h5>Basic Form</h5></div>
                        <div className="card-body">
                        <Form onSubmit={(e, values) => this.setState({result: values})}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <InputText name="username" 
                                    onChange={(e) => this.setState({ value:  e.target.value })}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Password name="password" 
                                    onChange={(e) => this.setState({ value:  e.target.value })}/>
                            </div>
                            <span className="alert alert-success">
                                Result: { json }
                            </span>
                            <br /><br />
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <br /> <br />
                            <p>Code:</p>
                            <figure className="highlight">
                                <pre>
                                <code className="prettyprint language-jsx">
                                    {
`<Form onSubmit={(e, values) => console.log(values)}> 
<InputText name="username" onChange={(e) => this.setState({ value:  e.target.value })}/> 
<Password name="password" onChange={(e) => this.setState({ value:  e.target.value })}/> 
<button type="submit" className="btn btn-primary">Submit</button> 
</Form>`
                                    }
                                </code>
                                </pre>
                            </figure>
                        </Form>
                        </div>
                    </div>
                    <section id="documentation">
                        <h1>Documentation</h1>
                        <div className="documentation">
                            <h4>Import</h4>
                            <figure className="highlight">
                                <code className="prettyprint language-jsx">
                                    {`import {Form} from 'react-falcon-form'`}
                                </code>
                            </figure>
                        </div>
                        <div className="documentation">
                            <h4>Properties</h4>
                            <p>Form has onSubmit properties that return the event and values of the props children.</p>
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
                                        <td>onSubmit</td>
                                        <td>Function</td>
                                        <td>Returns the event and values of props children.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
    )
  }
  
}