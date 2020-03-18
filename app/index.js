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


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Search />
            </React.Fragment>
        )
    }
}


ReactDOM.render(
    <App />, document.getElementById('main')
);
