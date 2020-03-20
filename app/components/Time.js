/**
 * TIME COMPONENT
 * @author Adi Davidovich
 * LAST CHANGE: 18/03/2020
 */
import React from 'react';
import moment from 'moment-timezone';


export default class Time extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            time: null,
            date: null
        };

        this.updateDateTime = this.updateDateTime.bind(this);
    }

    componentDidMount() {
        this.setState({
            isLoading: false,
            time: moment.tz(new Date(), 'Asia/Jerusalem').locale('en-il').format('LTS'),
            date: moment.tz(new Date(), 'Asia/Jerusalem').format('L')
        });
        
        this.interval = setInterval(this.updateDateTime, 100);
    }

    updateDateTime() {
        this.setState({
            date: moment.tz(new Date(), 'Asia/Jerusalem').format('L'),
            time: moment.tz(new Date(), 'Asia/Jerusalem').locale('en-il').format('LTS')
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { isLoading, time, date } = this.state;

        return (
            <div className='center'>
                <time id='clock'>
                    {isLoading
                        ? <span>Loading Time...</span>
                        : time
                    }
                </time>
                <time id='date'>
                    {isLoading
                        ? <span>Loading Date...</span>
                        : date
                    }
                </time>
            </div>
        );
    }
}
