/**
 * SEARCH COMPONENT
 * @author Adi Davidovich
 * LAST CHANGE: 18/03/2020
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
    }

    handleChange(e) {
        this.setState({ currentInput: e.target.value });
    }

    handleSubmit() {
        return (
            <span>
                submitted
            </span>
        );
    }

    checkCommand(ci) {
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
            document.body.style.backgroundColor = `${returnObj.color}`;

            return (
                <span id='search-context'>
                    Discover at: {returnObj.name}
                </span>
            );
        } else {
            document.body.style.backgroundColor = '#f3f3f3';
        }

        return null;
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = '#f3f3f3';
    }

    render() {
        const { currentInput } = this.state;

        return (
            <form
                className='center'
                id='search-form'
                autoComplete='off'
                spellCheck='false'
                onSubmit={() => this.handleSubmit}
            >
                <div>
                    {currentInput && this.checkCommand(currentInput)}
                    <input 
                        id='search-input'
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

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <SearchForm />
            </React.Fragment>
        );
    }
}