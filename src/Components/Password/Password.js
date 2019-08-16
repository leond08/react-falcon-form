import './Password.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Validation from '../Validation/Validation'
import InputText from '../InputText/InputText'


export default class Password extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        
    }

    static propTypes = {

    }

    render() {
        let passwordProps = Object.assign({}, this.props)

        return <InputText {...passwordProps} type="password" />
    }
}