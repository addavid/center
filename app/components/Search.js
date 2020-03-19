/**
 * SEARCH COMPONENT
 * @author Adi Davidovich
 * LAST CHANGE: 19/03/2020
 */
import React from 'react';
import commands from '../config/commands';


class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentInput: undefined
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.findCommand = this.findCommand.bind(this);
        this.checkCommand = this.checkCommand.bind(this);
    }

    handleChange(e) {
        event.preventDefault();
        this.setState({ currentInput: e.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const searchKeyword = event.target[0].value;
        const checkForCommand = this.findCommand(searchKeyword);

        // Checking if a command char was found
        if (checkForCommand) {
            window.location.href = `${checkForCommand.website}${checkForCommand.searchQuery}${searchKeyword.substr(2)}`;
        } else if (searchKeyword.match(/.*\..*/) && searchKeyword.match(/^\S+$/)) {
            if (searchKeyword.match(/^https?:\/\//)) {
                window.location.href = searchKeyword;
            } else {
                window.location.href = `https://${searchKeyword}`;
            }
            
        } else {
            // Otherwise it searches the query in the default search engine
            const se = commands.defaultSearchEngine;
            window.location.href = `${se.website}${se.searchQuery}${searchKeyword}`;
        }
    }
    
    findCommand(ci) {
        const commandKeys = Object.keys(commands);
        var returnObj = undefined;

        commandKeys.map((key) => {
            let re = new RegExp(`^(${key}/)`);

            if (ci.match(re)) {
                returnObj = commands[key];
                return true;
            }
        });

        if (returnObj) {
            return returnObj;
        }

        return false;
    }

    checkCommand(ci) {
        const returnObj = this.findCommand(ci);

        if (returnObj) {
            document.body.style.backgroundColor = `${returnObj.color}`;

            return (
                <span id='search-context'>
                    Discover at {returnObj.name}
                </span>
            );
        } else if (((ci.match(/.*\..*/) || ci.match(/^https?:\/\//)) && ci.match(/^\S+$/)))  {
            return (
                <span id='search-context'>
                    Navigating to {ci}
                </span>
            );
        }
        
        document.body.style.backgroundColor = '#f3f3f3';
        return (
            <span id='search-context'>
                Searching at {commands.defaultSearchEngine.name}
            </span>
        );
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = '#f3f3f3';
    }

    render() {
        const { currentInput, redirect } = this.state;

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
                        placeholder='press esc to exit'
                        onChange={(event) => this.handleChange(event)}
                        autoFocus={true} />
                    <ul id='search-suggestions'></ul>
                </div>
            </form>
        );
    }
}

export default function Search() {
    return (
        <React.Fragment>
            <SearchForm />
        </React.Fragment>
    );
}