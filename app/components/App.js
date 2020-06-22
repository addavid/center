/**
 * MAIN APPLICATION COMPONENT
 * @author Adi Davidovich
 * LAST CHANGE: 22/06/2020
 */
import React from 'react';
import '../assets/style.css';
import 'react-toggle/style.css';


/**
 * COMPONENTS IMPORT SECTION
 * LAST CHANGE: 22/06/2020
 */
import Search from './Search';
import Time from './Time';
import Help from './Help';
import Toggle from 'react-toggle';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadSearch: false,
            showHelp: false,
            checked: (localStorage.getItem('checked') === 'true' ? true : false) || false,
            bgColor: localStorage.getItem('bgColor') || '#f3f3f3',
            fgColor: localStorage.getItem('fgColor') || '#000'
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSearchUnmount = this.handleSearchUnmount.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
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

    changeTheme(e) {
        const checked = e.target.checked;
        const bgColor = checked ? '#000' : '#f3f3f3';
        const fgColor = checked ? '#fff' : '#000';

        this.setState({ bgColor: bgColor, fgColor: fgColor });
        localStorage.setItem('bgColor', bgColor);
        localStorage.setItem('fgColor', fgColor);
        localStorage.setItem('checked', checked);

        document.documentElement.style.setProperty('--bgColor', bgColor);
        document.documentElement.style.setProperty('--foreground', fgColor);
    }

    componentDidMount() {
        document.documentElement.style.setProperty('--bgColor', this.state.bgColor);
        document.documentElement.style.setProperty('--foreground', this.state.fgColor);
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
                            <span>/center, 1.0.1/</span>
                        </p>
                    </span>
                    <span className="footnote-message" id="help-message" title='Dark Mode'>
                            <Toggle
                                defaultChecked={this.state.checked}
                                onChange={this.changeTheme}
                                title='Dark Mode'
                            />
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