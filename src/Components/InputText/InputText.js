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
        id: null,
        blockKeys: false // if true do not display the inputted keys that are invalid
    }

    static propTypes = {
        // types definition
        onInput: PropTypes.func,
        onKeyPress: PropTypes.func,
        validationFilter: PropTypes.any,
        blockKeys: PropTypes.bool
    }
    
    onKeyPress(e) {
        if (this.props.onKeyPress) {
            this.props.onKeyPress(e)
        }

        if (this.props.validationFilter && this.props.blockKeys) {
            Validation.onPress(e, this.props.validationFilter)
        }
    }

    onInput(e) {
        let validateStatus = true
        if (this.props.validationFilter) {
            validateStatus = Validation.validate(e, this.props.validationFilter)
            if (this.props.onInput) {
                this.props.onInput(e, validateStatus)
            }
        }
    }


    render() {
        let className = classNames('form-control', 'f-inputtext-form')

        let inputProps = Object.assign({}, this.props)

        delete inputProps.validationFilter
        delete inputProps.onKeyPress
        delete inputProps.onInput
        delete inputProps.blockKeys

        return <input {...inputProps} className={className} onKeyPress={this.onKeyPress} onInput={this.onInput} />
    }
}