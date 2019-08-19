import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CalendarModal extends Component {

    static defaultProps = {
        className: null,
        style: null
    }

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    }

    renderCalendar() {
        return (
            <div ref={(e) => this.element = e} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    render() {
        let calendar = this.renderCalendar()

        return calendar
    }
}
