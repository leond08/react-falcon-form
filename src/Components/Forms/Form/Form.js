import React, { Component } from 'react'


const ValuesContext = React.createContext({})
const SetValuesContext = React.createContext(() => {})


export const FormConsumer = ({children}) => {
    return (
        <ValuesContext.Consumer>
            { values => (
                <SetValuesContext.Consumer>
                    { setValue => children(values, setValue)}
                </SetValuesContext.Consumer>
            )}
        </ValuesContext.Consumer>
    )
}

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {} 
    }

    static defaultProps = {
        defaultValues: {}
    }

    _setValue(name, value) {
        this.setState({
            [name]: value
        })
    }

    _onSubmit(event) {
        event.preventDefault()
        const values = this.state
        if (this.props.onSubmit) {
            this.props.onSubmit(event, values)
        }
    }

    render() {

        return (
            <ValuesContext.Provider value={this.state}>
                <SetValuesContext.Provider value={this._setValue.bind(this)}>
                    <form onSubmit={this._onSubmit.bind(this)}>
                        {this.props.children}
                    </form>
                </SetValuesContext.Provider>
            </ValuesContext.Provider>
        )
    }
}