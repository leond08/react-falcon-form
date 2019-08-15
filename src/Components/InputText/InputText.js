'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class InputText extends Component {
    constructor(props) {
        super(props)

        // bind the event
        this.onKeyPress = this.onKeyPress.bind(this)
        this.onInput = this.onInput.bind(this)
    }

    static defaultProps = {
        
    }

    static propTypes = {
        // types definition
        onInput: PropTypes.func,
        onKeyPress: PropTypes.func,
        validationFilter: PropTypes.any
    }
    
    onKeyPress(e) {
        console.log('I\'m being press...')
    }

    onInput(e) {
        console.log('Someone is inputting...')
    }

    render() {

        return <input type="text" onKeyPress={this.onKeyPress} onInput={this.onInput} />
    }
}