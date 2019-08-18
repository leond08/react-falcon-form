import './InputText.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Validation from '../Validation/Validation'
import HelpText from '../HelpText/HelpText'
import ToolTip from '../ToolTip/ToolTip'
import Form, {FormConsumer} from '../Forms/Form/Form'

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
        helpText: null,
        tooltip: null,
        tooltipOptions: null,
        blockKeys: false // if true do not display the inputted keys that are invalid
    }

    static propTypes = {
        // types definition
        onInput: PropTypes.func,
        onKeyPress: PropTypes.func,
        validationFilter: PropTypes.any,
        blockKeys: PropTypes.bool,
        helpText: PropTypes.string,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object
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

    componentDidMount() {
        if (this.props.helpText) {
            this.renderHelpText()
        }

        if (this.props.tooltip) {
            this.renderToolTip()
        }
    }

    componentWillUnmount() {
        if (this.helpText) {
            //this.helpText.destroy()
            this.helpText = null
        }

        if (this.tooltip) {
            //this.tooltip.destroy()
            this.tooltip = null
        }
    }

    renderToolTip() {
        this.tooltip = new ToolTip({
            target: this.element,
            message: this.props.tooltip,
            options: this.props.tooltipOptions
        })
    }

    renderHelpText() {
        this.helpText = new HelpText({
            target: this.element,
            message: this.props.helpText
        })
    }

    render() {
        let className = classNames('form-control', this.props.className)

        let inputProps = Object.assign({}, this.props)

        delete inputProps.validationFilter
        delete inputProps.onKeyPress
        delete inputProps.onInput
        delete inputProps.blockKeys
        delete inputProps.helpText
        delete inputProps.tooltipOptions
        delete inputProps.onChange

        return (
            <FormConsumer>
                {(values, setValue) => {
                    return <input ref={(el) => this.element = el}
                            onChange={(e) => {
                                e.preventDefault()
                                setValue(this.props.name, e.target.value)
                            }}
                            {...inputProps} 
                            className={className} 
                            onKeyPress={this.onKeyPress} 
                            onInput={this.onInput} />
                }}  
            </FormConsumer>
        )
    }
}