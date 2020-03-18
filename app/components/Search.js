/**
 * SEARCH COMPONENT
 * @author Adi Davidovich
 * LAST CHANGE: 18/03/2020
 */
import React from 'react';

function SearchForm({ searchFor }) {
    return (
        <form
            className='overlay center'
            id='search-form'
            autoComplete='off'
            spellCheck='false'
        >
            <div>
                <span id='search-context'></span>
                <input id='search-input' type='text' />
                <ul id='search-suggestions'></ul>
            </div>
        </form>
    );
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