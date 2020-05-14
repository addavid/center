/**
 * MAIN APPLICATION COMPONENT
 * @author Adi Davidovich
 * LAST CHANGE: 14/05/2020
 */
import React from 'react';
import '../assets/style.css';


/**
 * COMPONENTS IMPORT SECTION
 * LAST CHANGE: 14/05/2020
 */
import Search from './Search';
import Time from './Time';
import Help from './Help';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadSearch: false,
            showHelp: false
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSearchUnmount = this.handleSearchUnmount.bind(this);
    }

    handleKeyPress(event) {
        if (event.keyCode === 27) {
            this.setState({ loadSearch: false, showHelp: false });
        } else if (event.key === '?' && !this.state.loadSearch) {
            this.setState({ showHelp: true });
        } else if (event.keyCode !== 13) {
            this.setState({ loadSearch: true, showHelp: false });
        }
    }

    handleSearchUnmount() {
        return this.setState({ loadSearch: false });
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
                    : !showHelp && <Search searchUnmount={this.handleSearchUnmount} />
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