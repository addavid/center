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
            typed: false,
            loadSearch: false
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event) {
        if (event.keyCode === 27) {
            this.setState({ loadSearch: false });
        } else if (event.keyCode !== 13) {
            this.setState({ loadSearch: true });
        }
    }

    componentDidMount() {
        document.addEventListener('keydown',(e) => this.handleKeyPress(e));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown',(e) => this.handleKeyPress(e));
    }

    render() {
        const { loadSearch } = this.state;

        return (
            <React.Fragment>
                {!loadSearch
                    ? <Time />
                    : <Search />
                }
            </React.Fragment>
        );
    }
}


ReactDOM.render(
    <App />, document.getElementById('react-container')
);
