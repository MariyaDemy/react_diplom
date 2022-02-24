import React from 'react';
import './DateComponent.scss'

export class DateComponent extends React.Component {
    constructor() {
        super();

        let today = new Date();
        let day = today.getDay();
        switch (day) {
            case 1:
                day = 'Monday';
                break;
            case 2:
                day = 'Tuesday';
                break;
            case 3:
                day = 'Wednesday';
                break;
            case 4:
                day = 'Thursday';
                break;
            case 5:
                day = 'Friday';
                break;
            case 6:
                day = 'Saturday';
                break;
            default:
                day = "Sunday";
        }

        let month = today.getMonth() + 1;
        switch (month) {
            case 1:
                month = 'January';
                break;
            case 2:
                month = 'February';
                break;
            case 3:
                month = 'March';
                break;
            case 4:
                month = 'April';
                break;
            case 5:
                month = 'May';
                break;
            case 6:
                month = 'June';
                break;
            case 7:
                month = 'July';
                break;
            case 8:
                month = 'August';
                break;
            case 9:
                month = 'September';
                break;
            case 10:
                month = 'October';
                break;
            case 11:
                month = 'November';
                break;
            default:
                month = "December";
        }


        let date = month + ' ' + today.getDate() + ', '
            + today.getFullYear() + ' ' + '(' + ' ' + day + ' ' + ')';

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className='date'>
                <p className='date__text'>{this.state.date}</p>
            </div>
        );
    }
}

export default DateComponent;