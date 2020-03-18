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
            time: moment.now()
        };
    }

    componentDidMount() {
        this.setState({ isLoading: false });
    }


    render() {
        const { isLoading } = this.state;

        return (
            <div className='center'>
                <time id='clock'>
                    {isLoading
                        ? <span>Loading..</span>
                        : moment.now()
                    }
                </time>
            </div>
        );
    }
}
