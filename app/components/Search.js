/**
 * SEARCH COMPONENT
 * @author Adi Davidovich
 * LAST CHANGE: 03/04/2020
 */
import React from 'react';
import PropTypes from 'prop-types';
import config from '../config/commands';


export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentInput: undefined
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.findCommand = this.findCommand.bind(this);
        this.checkCommand = this.checkCommand.bind(this);
        this.shouldSearch = this.shouldSearch.bind(this);
    }

    handleChange(e) {
        event.preventDefault();

        if (e.target.value === '') {
            return this.props.searchUnmount();
        }
        
        this.setState({ currentInput: e.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        var action = null;
        var searchKeyword = event.target[0].value;
        const checkForCommand = this.findCommand(searchKeyword);

        // Checking if a command char was found
        if (checkForCommand) {
            action = searchKeyword.substr(1, 1);
            searchKeyword = searchKeyword.substr(2);

            if (searchKeyword !== '') {
                if (action === ':') {
                    window.location.href = `${checkForCommand.website}${checkForCommand.searchQuery}${searchKeyword}`;
                } else if (action === '/') {
                    window.location.href = `${checkForCommand.website}/${searchKeyword}`;
                    }
            } else {
                window.location.href = `${checkForCommand.website}`;
            }
        } else if (this.shouldSearch(searchKeyword)) {
            if (searchKeyword.match(/^https?:\/\//)) {
                window.location.href = searchKeyword;
            } else {
                window.location.href = `https://${searchKeyword}`;
            }
            
        } else {
            // Otherwise it searches the query in the default search engine
            const defaultSe = config.defaultSe;
            const se = config.commands[defaultSe];
            window.location.href = `${se.website}${se.searchQuery}${searchKeyword}`;
        }
    }
    
    findCommand(ci) {
        const commandKeys = Object.keys(config.commands);
        var returnObj = undefined;

        if (ci.length >= 2) {
            commandKeys.map((key) => {
                let re = new RegExp(`^(${key}/)|^(${key}:)`);

                if (ci.match(re)) {
                    returnObj = config.commands[key];
                    return true;
                }
            });

            if (returnObj) {
                return returnObj;
            }
        }

        return false;
    }

    checkCommand(ci) {
        const returnObj = this.findCommand(ci);

        if (returnObj) {
            var action = ci.substr(1, 1);
            document.body.style.backgroundImage = `${returnObj.color}`;

            if (action === ':') {
                action = 'Searching at';
            } else if (action === '/') {
                action = 'Navigating to';
            }
            
            return (
                <span id='search-context'>
                    {action} <span id='search-name'>{returnObj.name}</span>
                </span>
            );
        } else if (this.shouldSearch(ci))  {
            document.body.style.backgroundImage = null;
            return (
                <span id='search-context'>
                    Navigating to <span id='search-name'>{ci}</span>
                </span>
            );
        }
        
        const defaultSe = config.defaultSe;
        const se = config.commands[defaultSe];

        document.body.style.backgroundImage = se.color;
        return (
            <span id='search-context'>
                Searching at <span id='search-name'>{se.name}</span>
            </span>
        );
    }

    shouldSearch(input) {
        return (input.match(/.*\..*/) || input.match(/^https?:\/\//) || input.match(/:/)) && input.match(/^\S+$/);
    }

    componentWillUnmount() {
        document.body.style.backgroundImage = null;
    }

    render() {
        const { currentInput } = this.state;

        return (
            <form
                className='center'
                id='search-form'
                autoComplete='off'
                spellCheck='false'
                onSubmit={this.handleSubmit}
            >
                <div>
                    {currentInput && this.checkCommand(currentInput)}
                    <input
                        id='search-input'
                        name='searchbar'
                        type='text'
                        onChange={this.handleChange}
                        autoFocus={true} />
                </div>
            </form>
        );
    }
}
Search.PropTypes = {
    searchUnmount: PropTypes.func.isRequired
};