/**
 * MAIN APPLICATION FILE
 * @author Adi Davidovich
 * LAST CHANGE: 19/03/2020
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
import Help from './components/Help';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typed: false,
            loadSearch: false,
            showHelp: false
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event) {
        if (event.keyCode === 27) {
            this.setState({ loadSearch: false, showHelp: false });
        } else if (event.key === '?' && !this.state.loadSearch) {
            this.setState({ showHelp: true });
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
        const { loadSearch, showHelp } = this.state;

        return (
            <React.Fragment>
                {!loadSearch
                    ? !showHelp && <Time />
                    : !showHelp && <Search />
                }
                {showHelp && <Help />}

                <footer className="footnote">
                    <span className="footnote-message" id="hub-message">
                        <p>
                            <span>/center, 1.0.0/</span>
                        </p>
                    </span>
                    <span className="footnote-message" id="help-message">
                        <p>
                            <span></span>
                        </p>
                        </span>
                    <span className="footnote-message" id="commands-help-message">
                        <p>
                            <span>Press '?' for commands help</span>
                        </p>
                    </span>
                </footer>
            </React.Fragment>
        );
    }
}


ReactDOM.render(
    <App />, document.getElementById('react-container')
);
