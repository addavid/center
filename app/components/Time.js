/**
 * TIME COMPONENT
 * @author Adi Davidovich
 * LAST CHANGE: 18/03/2020
 */
import React from 'react';
import moment from 'moment';


export default class Time extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            time: moment().format('LTS'),
            date: moment().format('L')
        };

        this.updateDateTime = this.updateDateTime.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: false });
        this.interval = setInterval(this.updateDateTime, 1000);
    }

    updateDateTime() {
        this.setState({
            date: moment().format('L'),
            time: moment().format('LTS')
        });
    }

    render() {
        const { isLoading, time, date } = this.state;

        return (
            <div className='center'>
                <time id='clock'>
                    {isLoading
                        ? <span>Loading Time..</span>
                        : time
                    }
                </time>
                <time id='date'>
                    {isLoading
                        ? <span>Loading Date..</span>
                        : date
                    }
                </time>
            </div>
        );
    }
}
