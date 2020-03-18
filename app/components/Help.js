/**
 * HELP COMPONENT
 * @author Adi Davidovich
 * LAST CHANGE: 18/03/2020
 */
import React from 'react';


export default function Help() {
    return (
        <aside className="overlay center" id="commands-help">
            <ul className='categories'>
                <h2 className='category-name'>Developer Tools</h2>
                <li className='category'>
                    <ul>
                        <li className='command'>
                            <a href='https://www.github.com'>
                                <span className='command-key'>
                                    Github
                                </span>
                                <span className='command-name'>
                                    g/
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    );
}