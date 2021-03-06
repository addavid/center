/**
 * HELP COMPONENT
 * @author Adi Davidovich
 * LAST CHANGE: 02/04/2020
 */
import React from 'react';
import config from '../config/commands';


export default class Help extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            allCommands: null
        };
    }

    componentDidMount() {
        var categories = [];
        var filteredCommands = {};

        for (let p in config.commands) {
            let category = config.commands[p]['category'];

            if (categories.indexOf(category) === -1) {
                categories.push(category);

                filteredCommands[category] = {};
                filteredCommands[category]['keys'] = [p];
            } else {
                filteredCommands[category]['keys'].push(p);
            }
        }

        this.setState({ categories, filteredCommands });
    }


    render() {
        const { categories, filteredCommands } = this.state;
        
        return (
            <aside className='overlay center' id='commands-help'>
                <ul className='categories'>
                    {Object.values(categories).map(c => (
                        <li key={c} className='category'>
                            <h2 className='category-name'>{c}</h2>
                        
                            <ul>
                                {filteredCommands[c].keys.map(k => (
                                    <li key={k} className='command'>
                                        <a href={config.commands[k].website}>
                                            <span
                                                className='command-key'
                                                style={{backgroundImage: config.commands[k].color}}
                                            >
                                                {k}
                                            </span>

                                            <span className='command-name'>
                                                {config.commands[k].name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </aside>
        );
    }
}
