/**
 * MAIN APPLICATION FILE
 * @author Adi Davidovich
 * LAST CHANGE: 18/03/2020
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';


/**
 * COMPONENTS IMPORT SECTION
 * LAST CHANGE: 18/03/2020
 */
import Search from './components/Search';
import Time from './components/Time';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typed: false
        };
    }

    render() {
        const { typed } = this.state;

        return (
            <React.Fragment>
                {!typed ? <Time /> : <Search />}
            </React.Fragment>
        );
    }
}


ReactDOM.render(
    <App />, document.getElementById('react-container')
);
