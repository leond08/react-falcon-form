import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import classNames from 'classnames'
import PropTypes from 'prop-types'
import InputText from '../InputText/InputText'
import CalendarModal from './CalendarModal'
import Popper from 'popper.js'


export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.navBackward = this.navBackward.bind(this);
        this.navForward = this.navForward.bind(this)
        this.onInputFocus = this.onInputFocus.bind(this)

        this.state = {
            viewDate: new Date()
        }

    }

    static defaultProps = {
        inline: false,
        onInputFocus: null,
        numberOfMonths: 1,
        locale: {
            firstDayOfWeek: 0,
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ]
        }
    }

    static propTypes = {
        onInputFocus: PropTypes.func,
        numberOfMonths: PropTypes.number,
        locale: PropTypes.object
    }

    componentDidMount() {
        this.showOverlay()
    }

    componentWillUnmount() {
        if (this.popper) {
            this.popper.destroy()
            this.popper = null
        }
    }

    componentDidUpdate() {
    
    }

    // Show calendar
    showOverlay() {
        // Position the calendar
        function autoSizing(data) {
            //data.styles.width = data.offsets.reference.width;
            data.offsets.popper.left = data.offsets.reference.left;
            data.offsets.popper.right = data.offsets.reference.right;
            data.offsets.popper.width = data.styles.width = Math.round(data.offsets.reference.width)
            
            return data;
        }
        this.popper = new Popper(this.inputElement, this.calendarContainer, {
            placement: 'bottom',
            modifiers: {
                autoSizing: {
                  enabled: true,
                  fn: autoSizing,
                  order: 840,
                 }
            }
        })
    }

    onInputFocus(event) {
        console.log('Foucs')
    }
    
    getDaysCountInPrevMonth(month, year) {
        let prev = this.getPreviousMonthAndYear(month, year);
        return this.getDaysCountInMonth(prev.month, prev.year);
    }

    daylightSavingAdjust(date) {
        if (!date) {
            return null;
        }

        date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
        
        return date;
    }
    
    getPreviousMonthAndYear(month, year) {
        let m, y;
        
        if(month === 0) {
            m = 11;
            y = year - 1;
        }
        else {
            m = month - 1;
            y = year;
        }
        
        return {'month':m, 'year':y};
    }
    
    getNextMonthAndYear(month, year) {
        let m, y;
        
        if(month === 11) {
            m = 0;
            y = year + 1;
        }
        else {
            m = month + 1;
            y = year;
        }
        
        return {'month':m,'year':y};
    }

    getFirstDayOfMonth(month, year) {
        return (new Date(year, month)).getDay()
    }

    getDaysCountInMonth(month, year) {
        return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
    }

    createWeekDays() {
        let weekDays = [];
        let dayIndex = this.props.locale.firstDayOfWeek;
        for(let i = 0; i < 7; i++) {
            weekDays.push(this.props.locale.dayNamesShort[dayIndex]);
            dayIndex = (dayIndex === 6) ? 0 : ++dayIndex;
        }

        return weekDays;
    }

    createMonth(month, year) {
        let today = new Date()
        let firstDay = this.getFirstDayOfMonth(month, year)
        let daysInMonth = this.getDaysCountInMonth(month, year)
        let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
        let monthRows = Math.ceil((firstDay + daysInMonth) / 7)
        let days = []
        let date = 1;
        //creating individual cells, filing them up with data.
        for (let i = 0; i < monthRows; i++) { 
            let week = []
            if (i === 0) {
                for(let j = (prevMonthDaysLength - firstDay + 1); j <= prevMonthDaysLength; j++) {
                    let prev = this.getPreviousMonthAndYear(month, year);
                    week.push({day: j, active: false, isClickable: false,
                        month: prev.month, year: prev.year });
                }
                
                let remainingDaysLength = 7 - week.length;
                for(let j = 0; j < remainingDaysLength; j++) {
                    week.push({day: date, active: false, isClickable: true,
                        month: month, year: year});
                    date++;
                } 
            }
            else {
                for (let j = 0; j < 7; j++) {
                    if (date > daysInMonth) {
                        let next = this.getNextMonthAndYear(month, year);
                        week.push({day: date - daysInMonth, active: false, isClickable: false,
                        month: next.month, year: next.year})
                    }
                    else {
                        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                            week.push({day: date, active: true, isClickable: true, 
                                month: month, year: year})
                        } // color today's date
                        else {
                            week.push({day: date, active: false, isClickable: true, 
                                month: month, year: year})
                        }
                    }
                    date++;
                }
            }

            days.push(week)
        }

        return {
            month,
            year,
            days
        }
    }

    createMonths(month, year) {
        let months = [];
        for (let i = 0 ; i < this.props.numberOfMonths; i++) {
            let m = month + i;
            let y = year;
            if (m > 11) {
                m = m % 11 - 1;
                y = year + 1;
            }

            months.push(this.createMonth(m, y));
        }

        return months;
    }
    
    renderMonths(monthsMetaData) {
        return (
            monthsMetaData.map((monthData, index) => {
                return this.renderMonth(monthData, index);
            })
        );
    }

    renderTitle(monthData) {
        return (
            <div className="text-center">
                <span>{this.props.locale.monthNames[monthData.month]}</span> <span>{monthData.year}</span>
            </div>
            
        )
    }

    getViewDate() {
        return this.state.viewDate;
    }

    updateViewDate(event, value) {
        
        this.setState({
            viewDate: value
        });
    }

    navBackward(event) {
        let newViewDate = new Date(this.getViewDate().getTime());

        if(newViewDate.getMonth() === 0) {
            newViewDate.setMonth(11);
            newViewDate.setFullYear(newViewDate.getFullYear() - 1);
        }
        else {
            newViewDate.setMonth(newViewDate.getMonth() - 1);
        }

        this.updateViewDate(event, newViewDate)
 
        event.preventDefault();
    } 

    renderBackNav() {
        return (
            <span className="float-left" onClick={this.navBackward}>
                <i className="fas fa-chevron-left"></i>
            </span>
        );
    }

    navForward(event) {
        let newViewDate = new Date(this.getViewDate().getTime());

        if(newViewDate.getMonth() === 11) {
            newViewDate.setMonth(0);
            newViewDate.setFullYear(newViewDate.getFullYear() + 1);
        }
        else {
            newViewDate.setMonth(newViewDate.getMonth() + 1);
        }

        this.updateViewDate(event, newViewDate)
 
        event.preventDefault();
    }


    renderForwardNav() {
        return (
            <span className="float-right" onClick={this.navForward}>
                <i className="fas fa-chevron-right"></i>
            </span>
        )
    }

    renderMonth(monthData, index) {
        const weekDays = this.createWeekDays();
        const backwardNav = this.renderBackNav()
        const forwardNav = this.renderForwardNav()
        const headerTitle = this.renderTitle(monthData)
        const dateViewGrid = this.renderDateViewGrid(monthData, weekDays);

        return (
            <div key={monthData.month} style={{ background: '#fff', padding: '5px'}}>
                {headerTitle}
                {backwardNav}
                {forwardNav}
                {dateViewGrid}
            </div>
        );
    }

    renderDateCellContent(date) {
        const content = date.day;
        let className = classNames({ 'bg-primary text-white': date.active, 'text-muted': !date.isClickable })

        return (
            <span className={className}>
                {content}
            </span>
        );
    }

    renderWeek(day) {
        const week = day.map((date) => {
            const content = this.renderDateCellContent(date);
            let className = classNames('text-center', { 'bg-primary': date.active, 'bg-light': !date.isClickable })

            return (
                <td key={date.day} className={className}>
                    {content}
                </td>
            );
        });

        return week;
    }

    renderDates(monthData) {
        return monthData.days.map((day, index) => {
            return (
                <tr key={index}>
                    {this.renderWeek(day)}
                </tr>
            );
        });
    }

    renderDayNames(weekDays) {
        let className = classNames('text-center')
        const dayNames = weekDays.map(weekDay =>
            (
                <th key={weekDay} scope="col" className={className}>
                    <span>{weekDay}</span>
                </th>
            )
        );
        
        return dayNames;
    
    }

    renderDateViewGrid(monthData, weekDays) {
        const dayNames = this.renderDayNames(weekDays);
        const dates = this.renderDates(monthData);
        const className = classNames('table', this.props.className)
        return (
                <table className={className} id="calendar">
                    <thead>
                    <tr>
                        { dayNames }
                    </tr>
                    </thead>

                    <tbody>
                       {dates}
                    </tbody>
                </table>
        );
    }

    renderDateView() {
        let viewDate = this.state.viewDate
        const monthsMetaData = this.createMonths(viewDate.getMonth(), viewDate.getFullYear());
        const months = this.renderMonths(monthsMetaData);

        return (
            <React.Fragment>
               {months}
            </React.Fragment>
        );
    }

    renderInputElement() {
        return (
            <InputText ref={(e) => this.inputElement = ReactDOM.findDOMNode(e)}
                onFocus={this.onInputFocus}/>
        )
    }

    render() {
        let viewCalender = this.renderDateView()
        let inputElement = this.renderInputElement()
        return (
            <div>
                {inputElement}
                <CalendarModal ref={(e) => this.calendarContainer = ReactDOM.findDOMNode(e)} style={{ background: '#fff', border: '1px solid #ccc'}}>
                    { viewCalender }
                </CalendarModal>
            </div>
        )
        
    }
    
}ou