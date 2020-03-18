/**
 * MAIN APPLICATION FILE
 * @author Adi Davidovich
 * LAST CHANGE: 18/03/2020
 */
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}


ReactDOM.render(
    <App />, document.findById('main')
);
