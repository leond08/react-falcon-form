import './InputText.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Validation from '../Validation/Validation'

export default class InputText extends Component {

    constructor(props) {
        super(props)

        // bind the event
        this.onKeyPress = this.onKeyPress.bind(this)
        this.onInput = this.onInput.bind(this)
        
    }

    static defaultProps = {
        onKeyPress: null,
        onInput: null,
        validationFilter: null,
        placeholder: null,
        id: null
    }

    static propTypes = {
        // types definition
        onInput: PropTypes.func,
        onKeyPress: PropTypes.func,
        validationFilter: PropTypes.any
    }
    
    onKeyPress(e) {
        if (this.props.onKeyPress) {
            this.props.onKeyPress(e)
        }

        if (this.props.validationFilter) {
            Validation.onPress(e, this.props.validationFilter)
        }
    }

    onInput(e) {
        let validateStatus = true
        if (this.props.validationFilter) {
            validateStatus = Validation.validate(e, this.props.validationFilter)
            this.props.onInput(e, validateStatus)
        }
    }


    render() {

        let inputProps = Object.assign({}, this.props)

        delete inputProps.validationFilter
        delete inputProps.onKeyPress
        delete inputProps.onInput

        return <input {...inputProps} onKeyPress={this.onKeyPress} onInput={this.onInput} />
    }
}